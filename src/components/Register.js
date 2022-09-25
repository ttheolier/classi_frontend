import {useState} from 'react';
import './Login.css';
import {Button, TextField, ThemeProvider} from "@mui/material";
import uscTheme from "./theme";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const textStyle = {
        width:300,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none !important',
            borderColor: 'rgba(127, 176, 221, 0.27) !important',
            borderRadius: '15px',
        },
        '& .MuiInputBase-root': {
            backgroundColor: '#EEF4F5',
            borderRadius: '15px',
            color: '#000',
        },
        marginBottom: '40px !important',
        '& label': {
            color: '#9cb1b4 !important',
        },
    }


    const Register = (e)=>{
        console.log(email);
        console.log(password);
        console.log(confirm)
    }

    return (
        <div className={"textfieldHolder"}>
            <h2
                style={{
                    marginBottom: 0,
                    textAlign: 'center',
                    fontSize: 32,
                    fontWeight: 500,
                    fontFamily: 'Plus Jakarta Display, sans-serif',
                    color:  '#000',
                }}
            >
                Register
            </h2>
            <p
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: 'Plus Jakarta Display, sans-serif',
                    color: '#707183',
                }}
            >
                Create an account to continue.
            </p>
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                id='password'
                sx={textStyle}
                label='Email'
                variant='outlined'
                value={email}
                //error={isEmailInvalid}
                //helperText={isEmailInvalid ? 'edu?' : ''}
            />
            <TextField
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                sx={textStyle}
                label='Password'
                variant='outlined'
                type='password'
                value={password}
                //error={isPasswordInvalid}
                //helperText={isPasswordInvalid ? 'One Upper, Lower, and Number, 8 chars.' : ''}
            />
            <TextField
                onChange={(e) => setPassword(e.target.value)}
                id='confirm-password'
                sx={textStyle}
                label='Confirm Password'
                variant='outlined'
                type='password'
                value={confirm}
                //error={isPasswordInvalid}
                //helperText={isPasswordInvalid ? 'One Upper, Lower, and Number, 8 chars.' : ''}
            />
            <ThemeProvider theme={uscTheme}>
                <Button
                    type='submit'
                    sx={{
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontFamily: 'Plus Jakarta Display, sans-serif',
                        textTransform: 'none',
                    }}
                    size='large'
                    variant='contained'
                    onClick={Register}
                >
                    Register
                </Button>
            </ThemeProvider>
            <div className={'signUpPrompt'}>
                <p className={''}>Already Have an Account?</p>
                <a className={'loginLink'} href='/'>
                    Sign in
                </a>
            </div>
        </div>
    )
}

export default Login;
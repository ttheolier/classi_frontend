import React from 'react';
import './Login.css';
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import uscTheme from "./theme";

function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
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

    const SignIn = (e) => {
        console.log(email);
        console.log(password)
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
                Sign in
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
                Enter your credentials to continue.
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
                    onClick={SignIn}
                >
                    Sign in
                </Button>
            </ThemeProvider>
            <div className={'signUpPrompt'}>
                <p className={''}>Don't Have an Account?</p>
                <a className={'loginLink'} href='/register'>
                    Register
                </a>
            </div>
        </div>
    )
}

export default Login;
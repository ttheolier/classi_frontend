import React from 'react';
import './Login.css';
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";

const uscTheme = createTheme({
    palette: {
        primary: {
            main: '#990000',
        },
    },
});

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
        </div>
    )
}

export default Login;
import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from "../firebase";
import "../Login.css";

function Login() {
    const signIn = function () {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
            }).catch(err => alert(err.message));
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732245.png" alt="Slack logo" />
                <h1>Sign in to Developer's Club</h1>
                <p>developerclub.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login 
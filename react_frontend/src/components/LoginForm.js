import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserService from "../services/UserService";


const LoginForm = ({ setUserId }) => {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const [incorrectPass, setIncorrectPass] = useState(false)

    const usernameTextHandler = e => {
        setUsernameInput(e.target.value)
    }

    const passwordTextHandler = e => {
        setPasswordInput(e.target.value)
    }

    // Login/Register User
    const submitUserHandler = () => {

        if (usernameInput.trim() !== '' && passwordInput.trim() !== '') {
            const user = {
                name: usernameInput.trim(),
                password: passwordInput,
                todos: []
            }

            UserService.loginOrSignup(user).then(res => {
                if (res.status === 202) {
                    setUserId(res.data.id)
                    localStorage.setItem('userId', res.data.id)
                    setIncorrectPass(false)
                    window.location.href = 'https://festive-chandrasekhar-e40420.netlify.app/'
                }
            }).catch(err => {
                // Show 'incorrect password' text
                setIncorrectPass(true)
            })
        }
    }

    return (
        <form className="login-form" onSubmit={submitUserHandler}>
            {incorrectPass ? <p style={{ color: "red" }}><strong>Password is incorrect</strong></p> : <p style={{ color: "red" }}>* If username doesn't exist, it will create a new user.</p>}
            <TextField
                label="Username"
                type="text"
                value={usernameInput}
                onChange={usernameTextHandler}
            />
            <TextField
                label="Password"
                type="password"
                value={passwordInput}
                onChange={passwordTextHandler}
            />
            <div className="login-buttons">
                <Button onClick={submitUserHandler} variant="contained" color="primary">Submit</Button>
                <Link to="/">
                    <Button variant="contained" color="secondary">Cancel</Button>
                </Link>
            </div>
        </form>
    )
}

export default LoginForm

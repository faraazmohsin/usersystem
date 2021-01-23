import React from 'react';
import fire from './config/fire';
import './login.css';
import './assets/css/fonts.css';

class Login extends React.Component {

    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully Logged in");
            })
            .catch((err) => {
                console.log("Error: " + err.toString());
            })
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
    }

    signup() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully Logged in");
            })
            .catch((err) => {
                console.log("Error: " + err.toString());
            })

    }

    render() {
        return (
            <div style={{ textAlign: 'center '}}>
                <div id="email-title">
                    <div id="et">Email</div>
                    <input style={{ textAlign: 'center '}} id="email" placeholder="Enter Email" type="text"/>
                </div>
                <div id="pass-title">
                    <div id="pt">Password</div>
                    <input style={{ textAlign: 'center '}} id="password" placeholder="Enter Password" type="text"/>
                </div>
                <button id="btn1" style={{ margin: '20px' }} onClick={this.login}>Log In</button>
                <button id="btn2" style={{ margin: '20px' }} onClick={this.signup}>Sign Up</button>
            </div>
        )
    }
}

export default Login;
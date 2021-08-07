import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';

function LoginPage() {
    return (
        <div className="loginPage">
            <Link to="/">
                <img className="loginPage_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
                    alt="logo"/>
            </Link>
            <div className="loginPage_Container">
                <h1 className="loginPage_ContainerTitle">Sign In</h1>
                <form className="loginPage_Form">
                    <h5>E-mail</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button className="loginPage_SignInButton">SIGN IN</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's FAKE CLONE
                    Conditions of Use and Privacy Notice.
                </p>
                <button className="loginPage_CreateButton">CREATE AMAZON ACCOUNT</button>
            </div>
        </div>
    )
}

export default LoginPage
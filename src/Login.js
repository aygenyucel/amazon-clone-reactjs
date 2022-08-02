import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='login'>
        <Link to ={'/'}>
            <img 
                className='login__logo'
                src='https://file.wikipediam.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png' 
            />
        </Link>
        <div className='login__container'>

            <div className='login__signInContainer'>
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon Clone Conditions of Use and Privacy Notice.
                </p>

            </div>
        

            <div className='login__registerContainer'>
                
                <p>New to Amazon?</p>
                
                
                <button className='login__registerButton'>Create your Amazon account</button>

            </div>

        </div>

            

    </div>
  )
}

export default Login
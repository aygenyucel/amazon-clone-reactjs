import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // if successfuly created new user with email and password.
                console.log(auth);
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    }
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
                    <input type='text' value={email} onChange = {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange = {e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon Clone Conditions of Use and Privacy Notice.
                </p>

            </div>
        

            <div className='login__registerContainer'>
                
                <p>New to Amazon?</p>
                
                <button onClick={register} className='login__registerButton'>Create your Amazon account</button>

            </div>

        </div>

            

    </div>
  )
}

export default Login
import React from 'react';
import "./Login.scss";
import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1 className="login__title">Dealership Login</h1>
        <form className='loginForm'>
            <h2 className='loginForm__title'>Login Form</h2>
            <label htmlFor='username' className='loginForm__label'>Username</label>
            <input name="username" type="text" placeholder="User Name" className='loginForm__input'/>
            <label htmlFor='password' className='loginForm__label loginForm__label--password'>Password</label>
            <input name="password" type="password" placeholder="Password" className='loginForm__input'/>
            <button className="loginForm__button">Submit</button>
          </form>

      </div>
    )
  }
}

export default Login
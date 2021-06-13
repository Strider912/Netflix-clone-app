import React, { useState } from 'react'
import Signup from './Signup'
import  './Login.css'

const Login = () => {

    const [ signin, setsignin ] = useState(false)
    
    return (

        <div className="login">
            <div className="login__background">
                <img src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="" className="login__logo" />
                <button
                onClick={()=> setsignin(true) }
                 className="login__button">Sign In</button>
                <div className="login__gradient" />
            </div>

        <div className="login__body">
        { signin ? ( <Signup/> )  :  (  
            <>

            <h1> Unlimited films , TV programmes and more. </h1>
          <h2> Watch anywhere , Cancel at any time. </h2>
          <h3> Ready to create ? Enter you email to create or  restart your membership. </h3>

        <div className="login__screeninput">
            <form >
                <input type="email" placeholder="Enter you email" />
                <button className="login__screeninputbutton" > Sign In </button>
            </form>
        </div>

            </>
            ) }
        </div>

        </div>

    )
}

export default Login



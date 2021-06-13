import React, { useRef } from 'react'
import  { auth } from './Firebase'
import  './Signup.css'


const Signup = () => {
const emailref = useRef(null)
const passwordref = useRef(null)

    const register=(e)=>{
        console.log("hello bello ")
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value,
        ).then((authUser)=>{

        }).catch(error => {
            alert(error.message);
        })
    }

    const signin=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value,
            ).then((authUser)=>{
                // console.log(authUser)
            }).catch(error => {
                alert(error.message);
            })
    }

    return (

        <div className="signupscreen">
            <form >
                <h1> Sign In </h1>
                <input ref={emailref}  type="email" placeholder="Enter your email" />
                <input ref={passwordref} type="password" placeholder="Enter your password" />
                <button  onClick={signin} className="signupscreen__button" > Sign In</button>
                <h4> <span  className="gray" > New to netflix </span> <span className="underline" onClick={register} > Register </span>  </h4>
            </form>
        </div>

    )
}

export default Signup



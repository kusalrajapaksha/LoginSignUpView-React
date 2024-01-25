import React, { useState } from 'react'
import './LoginSignUp.css'

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up")
    const [signInHovered, setSignInHovered] = useState(false)
    const [loginHovered, setLoginHovered] = useState(false)


  return (
    <div className='container'>
        {/* header */}
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        {/* inputs */}
        <div className="inputs">
            {action === "Login" ? <div></div> : <div className="input">
                <img src={user_icon} alt="" />
                <input type="text"placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {/* submit */}
        {action==="Sign Up" ? <div></div> : <div className="forgot-password">Forgot password? <span>Click here!</span></div>}
        
        <div className="submit-container">
            <div onMouseEnter={()=>{setSignInHovered(true)}} onMouseLeave={()=>{setSignInHovered(false)}} className={action==="Login" ? `submit gray ${signInHovered ? 'hovered' : ''}` : `submit ${signInHovered ? 'hovered' : ''}`} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div onMouseEnter={()=>{setLoginHovered(true)}} onMouseLeave={()=>{setLoginHovered(false)}} className={action==="Sign Up" ? `submit gray ${loginHovered ? 'hovered' : ''}` : `submit ${loginHovered ? 'hovered' : ''}`} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp

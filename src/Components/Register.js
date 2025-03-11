import React, { useState } from 'react'
import './style.css'
import user from '../Image/user.png'
import email from '../Image/email.png'
import padlock from '../Image/padlock.png'

const Register = () => {

    const [action, setAction] =useState("Login");
    return (
        <div>
            <div className='Container'>
                <div className='header'>
                    <div className='text'> {action}</div>
                    <div className='underline'> </div>
                </div>
                <div className='inputs'>

                {action ==="Login"? <div></div> : <div className='input'>
                        <img src={user} alt='' />
                        <input type='text' placeholder='Name' />
                    </div> }
                    
                    <div className='input'>
                        <img src={email} alt='' />
                        <input type='email' placeholder='Email ID'/>
                    </div>
                    
                    <div className='input'>
                        <img src= {padlock} alt='' />
                        <input type='password' placeholder='Password'/>
                    </div>
                </div> 
                {action ==="Sign Up"?<div></div> : <div className='forgot-password'> Forgot Password <span> Click Here! </span> </div> }
                <div className='submit-container'>
                <div className={action=== "Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> SignUP</div>
                <div className={action=== "Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login</div>
                </div>
</div>
                </div>

        
    )
}
export default Register;
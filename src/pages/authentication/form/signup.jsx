import { useState } from 'react'
import './signup.scss'
function SignUp(){
    const[btnValue, setBtnValue] = useState('Sign Up')
    return(
        <div id="form_container">
        <div id="image">
            <div id="img">

            </div>
        </div>
        <div id="auth">
            <div id="form">
                <div className="options">
                    <span>Sign Up</span> <span>Sign In</span>
                </div>
                <div id="bar"></div>
                <div className="form">
                    <div id="info">
                        <div id="fullname">
                            <span>Full Name</span>
                            <input type="text" placeholder='' autoComplete='true'/>
                        </div>
                        <div id="email">
                            <span>E-mail</span>
                            <input type="text" placeholder='' autoComplete='true'/>
                        </div>
                        <div id="pwd">
                            <span>Password</span>
                            <input type="password" placeholder=''/>
                        </div>
                    </div>
                    <div id="btn">{btnValue}</div>
                    <div id="quest">Already have an Account?</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp
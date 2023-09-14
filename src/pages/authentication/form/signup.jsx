import { useState } from 'react'
import './signup.scss'
function SignUp(){
    const[btnValue, setBtnValue] = useState('Sign Up')
    const[slideValue, setSlideValue] = useState('45px')
    const[fname, setfname] = useState('')
    const[mail, setmail] = useState('')
    const[pwd, setpwd] = useState('')
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
        return emailRegex.test(email);
    }

    const fullname = (e) =>{
        alert(e.target.value)
    }
    const email = (e) =>{
        alert(e.value)
    }
    const password = (e) =>{
        alert(e.value)
    }

    const toogle = () =>{
        if(btnValue === 'Sign Up'){
            toogle_i()
        }
    }
    const toogle_u = () => {
        setBtnValue('Sign Up')
        setSlideValue('45px')
    }
    
    const toogle_i = () => {
        setBtnValue('Sign In')
        setSlideValue('140px')
    }

    const slide = {
        marginLeft: slideValue
    }
    return(
        <div id="form_container">
        <div id="image">
            <div id="img">

            </div>
        </div>
        <div id="auth">
            <div id="form">
                <div className="options">
                    <span onClick={toogle_u}>Sign Up</span> <span onClick={toogle_i}>Sign In</span>
                </div>
                <div id="bar" style={slide}></div>
                <div className="form">
                    <div id="info">
                        {(btnValue === 'Sign In' ? (
                            <>
                            </>
                        ) : (
                            <>
                        <div id="fullname">
                            <span>Full Name</span>
                            <input type="text" onChange={fullname} placeholder='' autoComplete='true'/>
                        </div>
                            </>
                        ))}
                        <div id="email">
                            <span>E-mail</span>
                            <input type="text" onChange={email} placeholder='' autoComplete='true'/>
                        </div>
                        <div id="pwd">
                            <span>Password</span>
                            <input type="password" onChange={password} placeholder=''/>
                        </div>
                    </div>
                    <div id="btn"onClick={toogle}>{btnValue}</div>
                    <div id="quest">Already have an Account?</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp
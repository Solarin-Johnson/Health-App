import { useState } from 'react'
import './signup.scss'
function SignUp(){
    const[btnValue, setBtnValue] = useState('Sign Up')
    const[slideValue, setSlideValue] = useState('45px')
    const[fname, setFname] = useState('')
    const[mail, setMail] = useState('')
    const[pwd, setPwd] = useState('')
    const[quest, setQuest] = useState('Already have an account?')
    
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
        return emailRegex.test(email);
    }

    const fullname = (e) =>{
        setFname(e.target.value)
    }
    const email = (e) =>{
        setMail(e.target.value)
    }
    const password = (e) =>{
        setPwd(e.target.value)
        e.target.value = pwd
    }

    const toogle = () =>{
        if(btnValue === 'Sign Up'){
            if(fname.length <= 2){
                alert(`' ${fname} ' is too short for a Username`)
            } else if(!validateEmail(mail)){
                alert(`' ${mail} ' is an invalid mail address`)
            }else if(pwd.length <= 8){
                alert(`Password should be more than 8 characters long`)
            } else {
                toogle_i()
                
            }
        }
    }
    const toogle_u = () => {
        setBtnValue('Sign Up')
        setQuest('Already have an account?')
        setSlideValue('45px')
    }
    
    const toogle_i = () => {
        setBtnValue('Sign In')
        setSlideValue('140px')
        setQuest('Forgotten Password?')
        setPwd('')
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
                            <input value={pwd} type="password" onChange={password} placeholder=''/>
                        </div>
                    </div>
                    <div id="btn"onClick={toogle}>{btnValue}</div>
                    <div id="quest">{quest}</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp
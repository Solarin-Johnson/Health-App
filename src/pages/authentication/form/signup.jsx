import { useState } from 'react'
import axios from 'axios'
import './signup.scss'
function SignUp({getToken}){
    const[btnValue, setBtnValue] = useState('Sign Up')
    const[slideValue, setSlideValue] = useState('45px')
    const[fname, setFname] = useState('')
    const[mail, setMail] = useState('')
    const[pwd, setPwd] = useState('')
    const[quest, setQuest] = useState('Already have an account?')
    const[err, setErr] = useState('')
    const[token, setToken] = useState('')
    const clearErr = () =>{
        setTimeout(() => {
            setErr('')
        }, 5000);
    }

    const fullname = (e) =>{
        setFname(e.target.value)
    }
    const email = (e) =>{
        setMail(e.target.value)
    }
    const password = (e) =>{
        setPwd(e.target.value)
    }

    const submit = async (event) =>{
        event.preventDefault();

        if(btnValue === 'Sign Up'){       
            
        const url = 'https://fastapiauth-1-c1213112.deta.app/user/register';
        const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }        };
        
        const response = await axios.post(url, {
            "first_name": fname,
            "last_name": "",
            "email": mail,
            "password": pwd
          });
          try {
              console.log(response)
              if (typeof response.data != 'string') {
                  setErr(response.data.details)
                } else {
                  setErr(response.data)
                }        
            clearErr()
          } catch (error) {
                console.log(error)
          }
        
        toogle_i()
    } else {
        const url = 'https://fastapiauth-1-c1213112.deta.app/user/login';
        const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }        
        };
        
        const response = await axios.post(url, {
            "email": mail,
            "password": pwd
          });
          console.log(response.data)
        if (response.data.details === 'Network Error') {
            setErr('User Not Found')
          } else if( response.data.access_token){
                setErr('User Logged In')
                setToken(response.data.access_token)
                getToken(response.data.access_token)
          } else {
           setErr('Incorrect Password')
          }
          clearErr()

    }

    }
    const toogle_u = () => {
        setBtnValue('Sign Up')
        setQuest('Already have an account?')
        setSlideValue('45px')
        setPwd('')
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
                <form onSubmit={submit} autoComplete='on' className="form">
                <div id="err">{err}</div>
                    <div  id="info">
                        {(btnValue === 'Sign In' ? (
                            <>
                            </>
                        ) : (
                            <>
                        <div id="fullname">
                            <span>Full Name</span>
                            <input type="text" minLength={3} required onChange={fullname} placeholder='' />
                        </div>
                            </>
                        ))}
                        <div id="email">
                            <span>E-mail</span>
                            <input type="email" required onChange={email} placeholder='' autoComplete='true'/>
                        </div>
                        <div id="pwd">
                            <span>Password</span>
                            <input value={pwd} required minLength={8} type="password" onChange={password} placeholder=''/>
                        </div>
                    </div>
                    <button type='submit' id="btn">{btnValue}</button>
                    <div id="quest">{quest}</div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default SignUp
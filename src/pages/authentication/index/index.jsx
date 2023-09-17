import './index.scss'
import '../../../images/signin.png'
import '../../../images/signup.png'
import { useEffect, useState } from 'react'
function Index({_indicate}){
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const signup = () => {
        _indicate('signup')
    }
    useEffect(() => {
        const handleResize = () => {
        setBrowserWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const [currentState,setCurrentState] = useState('index')
    
        return(
        <div id="container">
            <div id="image">
                <div id="img">

                </div>
            </div>
            <div id="auth">
                <div id='welcome'><span>Welcome to</span> <br/> <span>LifeSphere</span></div>
                <div id="motto">Your LifeSpere, Where Health Flourishes</div>
                <div id="options">
                    <div id="signup" onClick={signup}>Create New Account</div>
                    <div id="signin"  onClick={signup}>Login</div>
                </div>
                <div id="t_c">By using this website, you agree to our Terms and Conditions. 
                    Your continued use implies acceptance of our Privacy Policy.
                </div>
            </div>
        </div>
    )
   
}

export default Index
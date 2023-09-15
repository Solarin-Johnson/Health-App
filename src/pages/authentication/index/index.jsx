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
    if(browserWidth < 700){

        
        return(
        <div id="container">
            <div id="image">
                <div id="img">

                </div>
            </div>
            <div id="auth">
                <span id='welcome'></span>
                <div id="options">
                    <div id="signup" onClick={signup}>Create New Account</div>
                    <div id="signin"  onClick={signup}>Login</div>
                </div>
            </div>
        </div>
    )
    } else {
            <>
            {signup()}
            </>
    }
}

export default Index
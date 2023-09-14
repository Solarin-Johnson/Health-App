import { useState } from "react"
import Login from "../pages/authentication/form/login"
import Index from "../pages/authentication/index/index"
import SignUp from "../pages/authentication/form/signup"
function Auth(){
    const [authType, setAuthType] = useState('index')
    const indicate = (data) => {
        setAuthType(data)
    }
    if(authType === 'index'){
        return(
            <Index _indicate={indicate} />
        )
    }
    if(authType === 'login'){
        return(
            <Login />
        )
    }
    if(authType === 'signup'){
        return(
            <SignUp />
        )
    }
}
export default Auth
import { useState } from "react"
import Index from "../pages/authentication/index/index"
import SignUp from "../pages/authentication/form/signup"
function Auth({token}){
    
    const [authType, setAuthType] = useState('index')

    const indicate = (data) => {
        setAuthType(data)
    }
    if(authType === 'index'){
        return(
            <Index _indicate={indicate} />
        )
    }
    if(authType === 'signup'){
        return(
            <SignUp getToken={token}/>
        )
    }
}
export default Auth
import { useState } from "react"
import Login from "../authentication/login/login"
import Index from "../authentication/index/index"
function Auth(){
    const [authType, setAuthType] = useState('index')
    const indicate = (data) => {
        setAuthType(data)
    }
    if(authType === 'index'){
        return(
            <Index authType={indicate} />
        )
    } else if(authType === 'login'){
        return(
            <Login />
        )
    }
}
export default Auth
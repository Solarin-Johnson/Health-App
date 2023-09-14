import { useState } from "react"
import Login from "./login/login"
import Index from "./index"
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
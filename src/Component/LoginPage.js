import  Header  from './Header'
import React,{useEffect} from "react"
import { useNavigate } from "react-router-dom";
function Login() {
    
    const navigate=useNavigate()
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/AddProduct")
        }
    }, [])

    return(
        <>
        <Header />
        <div>
            <h1>
            
                Login Page
            </h1>
        </div>
        </>
    )
}
export default Login;
import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import  Header  from './Header'
function Register() {
    
    

    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const navigate=useNavigate()

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/AddProduct")
        }
    }, [])


    async function signUp(params) {
        let item={name,password,email}
        console.warn(item)
        let result=await fetch("http://localhost:8000/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"

            },
            body:JSON.stringify(item)
        })
        result=await result.json();
        console.warn("result",result)
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/AddProduct")
    }
    return(<>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>
                User SignUp Page
            </h1>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} className="form-control"/>
            <br/>
            <input type="text" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control"/>
            <br />
            <input type="text" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control"/>
            <br />
            <button onClick={signUp} className="btn btn-primary">SignUp</button>

        </div>
        </>
    )
}
export default Register
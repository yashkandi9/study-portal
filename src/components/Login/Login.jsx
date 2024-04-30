import React from 'react'
import './Login.css'
import email_icon from '../../assets/email.png'
import user_icon from '../../assets/person.png'
import password_icon from '../../assets/password.png'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [action,setaction] = useState("Login")
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if(!values.email || !values.pass){
            setErrorMsg("Fill all fields")
            return;
        }
        setErrorMsg("")
        // console.log(values);
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res) => {
            setSubmitButtonDisabled(false);
            
            navigate('/')
        })
        .catch(err => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
            // console.log("Error-", err)});
        })
    }

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
    
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt="User icon" />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' 
                onChange={(event) =>
                    setValues((prev) => ({...prev, email: event.target.value}))}/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' 
                onChange={(event) =>
                    setValues((prev) => ({...prev, pass: event.target.value}))}/>
            </div>  
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgotpass">Lost Password? <span>Click here!</span></div>}
        
        <div className='submit-container'>
            <b className='errormsg'>{errorMsg}</b>
            <button  className='buttonn' disabled={submitButtonDisabled} 
            onClick={handleSubmission}>Login</button>
            {/* <div className={action==="Login"?"submit gray" : "submit"}
            onClick={()=>{
                setaction("Sign Up")
            }}
            >Sign Up</div>
            <div className={action==="Sign Up"?"submit gray" : "submit"}
            onClick={()=>{
                setaction("Login")
            }}
            >Login</div> */}
        </div>
    </div>
  )
}

export default Login

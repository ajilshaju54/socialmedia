import { CircularProgress } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCall } from "../../apiCalls";
import "./login.css";

export default function Login() {
const email = useRef();
const password = useRef();
const dispatch = useDispatch()
const {isFetching,user,error} = useSelector((prevState)=> prevState)|| {isFetching:false,user:null,error:null}


const handleClick = (e) =>{

  e.preventDefault()
  dispatch(loginCall({email: email.current.value, password:password.current.value}))
  
}
console.log(isFetching,user,error);
    


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" ref={email} className="loginInput" required  />
            <input placeholder="Password" type="password" className="loginInput"required ref={password} minLength="1"/>
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching? <CircularProgress style={{color:"white"}}/>: "Login"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" > {isFetching? <CircularProgress style={{color:"white"}}/>: "Create a New Account"}
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
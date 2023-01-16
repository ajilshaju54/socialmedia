import "./register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {


  const email = useRef();
  const password = useRef();
  const username = useRef();
  const passwordagain = useRef()
  const navigate = useNavigate();
 


const handleClick =async (e) =>{

  e.preventDefault();

if(passwordagain.current.value!==password.current.value) {
  password.current.setCustomValidity("password don't match!");
}else{
  const user = {
    username: username.current.value,
    password:password.current.value,
    email:email.current.value
  }
  console.log(user);
  try{
    await axios.post("/auth/register", user) 
    navigate("/login")  //login also have this ..in apicall.becuse through login
  }catch(err){                                //reach home page have many other components..so redux function use.
                                              //here only from register page..we reached only to login..
    console.log(err)                              //so no redux function is used
  }
}
  
  
}

    


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
          <form className="loginBox " onSubmit={handleClick}>
            <input placeholder="Username" className="loginInput" ref={username} required/>
            <input placeholder="Email" className="loginInput" type="email" ref={email} required/>
            <input placeholder="Password" className="loginInput" type="password" ref={password} required minLength="1" />
            <input placeholder="Password Again" className="loginInput" type="password"  ref={passwordagain} required minLength="1"/>
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
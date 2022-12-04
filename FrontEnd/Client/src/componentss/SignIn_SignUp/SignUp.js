import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css"
function SignUp() {
    let [emailError, setEmailError] = useState(false);
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [cPassword, setCPassword] = useState();
    let [cPasswordError, setCPasswordError] = useState(false);
    let navigate= useNavigate()
    // function postData() {
    //     fetch("/api/signup", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email,password
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //       }
    //     })
    //       .then(response => response.json())
    //   }

    function postData() 
    {
     
        fetch("/api/signUp", {
          method: "POST",
          body: JSON.stringify({
            email, password
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
      .then(function (response) 
      {
        console.log(response.message);
        if (!response.message === "Email already exists") 
        {alert("registered Succeful")
            navigate('/')        
        }else{
            alert("Email already exists")
        }  
      })
      .catch((error) => {
  console.error('Error:', error);
      }); 
  
    }
    let emailRegex =
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    let emailHandler = (e) => {
        let value = e.target.value;
        if (!value.match(emailRegex)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(value);
    };
    let cPasswordHandler = (e) => {
        let value = e.target.value;
        if (!value === password) {
            setCPasswordError(true);
        } else {
            setCPasswordError(false);
        }
        setCPassword(value);
    };
    let passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    let submitHandler = (e) => {
        e.preventDefault();
        postData()
   
    };
    return (
       <div className="sign-container">
         <form className="main-boxing" onSubmit={submitHandler}>
           <h1 className="signin-logo">Logo</h1>
           <div>Create an Account</div>

            <div>

                <input placeholder="Email" className="input-boxing" type="email" name="email" value={email} onChange={emailHandler} />
                {emailError ? <div className="error">Invalid Email</div> : ""}
            </div>
            <div>
      
                <input
                placeholder="Password" 
                className="input-boxing"
                    type="password"
                    name="password"
                    value={password}
                    onChange={passwordHandler}
                />
            </div>
            <div>
                
                <input
                placeholder="Confirm Password" 
                className="input-boxing"
                    type="password"
                    name="cpassword"
                    value={cPassword}
                    onChange={cPasswordHandler}
                />
                {cPasswordError ? <div className="error">Password must match</div> : ""}
            </div>
            <button className="btn" type="submit">Sign Up</button>
            <Link to="/">Sign In</Link>
        </form>
       
       </div>
    );
}
export default SignUp;
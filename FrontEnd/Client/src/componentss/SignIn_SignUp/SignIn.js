



//   // const login = (e) => {
//   //   e.preventDefault();
//   //   let DATA = {
//   //     email: email,
//   //     password: password
//   //   }
//   //   localStorage.setItem('userId', DATA.email)
//   //   axios.post('/api/login', DATA)
//   //     .then(function (response) {
//   //       console.log(response.data.message);
//   //       if (response.data.message === "success") {
//   //         localStorage.setItem('token', response.data.token)
//   //         navigate('/display')
//   //       }
//   //       else {
//   //         alert(response.data.message)
//   //       }
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //       alert('error')
//   //     });
// <button className="btn" onClick={login}>Login</button>


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  let [emailError, setEmailError] = useState(false);
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let navigate = useNavigate()
  function postData() {
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email, password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
  }
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailHandler = (e) => {
    let value = e.target.value;
    if (!value.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(value);
  };

  let passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  let submitHandler = (e) => {
    e.preventDefault();
  //   localStorage.setItem('userId', email)
  //   if (response.data.message === "success") {
  //     localStorage.setItem('token', response.data.token)
  //     postData()
  //   }
  //   else {
  //     alert(response.data.message)
  //   }
  //   navigate('/display')
  };
  return (
    <div className="sign-container">
      <form className="main-boxing" onSubmit={submitHandler}>
        <h1 className="signin-logo">Logo</h1>
        <div>Create an Account</div>

        <div>

          <input placeholder="UserId" className="input-boxing" type="email" name="email" value={email} onChange={emailHandler} />
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
        <button className="btn" type="submit">Sign In</button>
        <Link to="/signUp">Sign Up</Link>
      </form>

    </div>
  )
}

export default SignIn

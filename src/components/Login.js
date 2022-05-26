import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = (props) => {



  const host = 'https://themathcompany.herokuapp.com';


  let navigate = useNavigate();

  const [creds, setCreds] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    props.setProgress(70);
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creds)

    });
    props.setProgress(80);

    const json = await response.json();

    props.setProgress(90);

    if (json.success) {
      //save the auth token and redirect 
      localStorage.setItem('token', json.authtoken)
      props.showAlert("success", "Logged in successfully")
      props.setProgress(100);
      navigate("/")
    }
    else {
      props.setProgress(100);
      props.showAlert("danger", "Invalid details, try again!")
    }


    //Get name of logged in user
    if (json.success) {

      const userresponse = await fetch(`${host}/api/auth/getuser`, {
        method: 'POST',
        headers: {
          "auth-token": localStorage.getItem('token'),
          "Content-Type": "application/json"
        },
      });
      let userName = await userresponse.json();
      localStorage.setItem("userName", userName.name);
      localStorage.setItem("loggedInUser", userName._id);
    }

  }

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  const loginFun = () => {
    navigate('/signup');
  }


  return (
    <>
      <form className='mt-5' style={{ height: '78vh' }} onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <h1 className='mt-5 fontcss'>Login to Note<span style={{ color: '#f17126' }}>List</span></h1>
        </div>
        <div className="d-flex justify-content-center">

          <p className='mb-4'>Don't have an account? <button style={{ cursor: 'pointer', border: 'none', background: 'none', textDecoration: 'underline', color: '#0074ba', fontWeight: 'bold' }} onClick={loginFun}>Signup</button></p>
        </div>
        <div className="fullContainer">
          <div className="mb-3 mt-3">
            <div className="d-flex justify-content-center">
              <label htmlFor="inputEmail3" className="form-label cssl"><br /></label>
            </div>
            <div className="d-flex justify-content-center inputContainer">
              <i className="fa-solid fa-user fa-1x mx-2 d-flex align-items-center"></i>
              <input autoComplete='off' type="email" className="bootInput" id="inputEmail3" placeholder='Email' name='email' value={creds.email} onChange={onChange} />
            </div>
          </div>
          <div className="mb-3 ">
            <div className="d-flex justify-content-center">
              <label htmlFor="inputPassword3" className="form-label cssl"><br /></label>
            </div>
            <div className="d-flex justify-content-center inputContainer">
              <i className="fa-solid fa-key fa-1x mx-2 d-flex align-items-center"></i>
              <input autoComplete='off' type="password" className="bootInput" id="inputPassword3" placeholder='Password' name='password' value={creds.password} onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-secondary my-3">Login</button>
        </div>
      </form>
    </>
  )
}


export default Login
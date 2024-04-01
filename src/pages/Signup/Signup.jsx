import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant-variable";
import { Link, Navigate } from 'react-router-dom';
import "./Signup.scss"
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const register = () => {
    axios.post(`${BASE_URL}/users/signup`, {
      user_name: name,
      email: email,
      password: pass
    }).then((response) => {
      console.log(response.data); // Log the response data
   navigate('/profile/add');

    }).catch((error) => {
      console.error(error); // Log the error
      // Handle error, show message to user, etc.
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
     // Call the register function when form is submitted

  }

  return (
    <section className="register">
      <div className="register__container">
        <form className="register__form" onSubmit={handleSubmit}>
          <h2 className="register__title">Signup</h2>
          <label className="register__label" htmlFor="name">Full name</label>
          <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button className="register__submit" type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
      </div>
    </section>
  );
}

export default Signup;

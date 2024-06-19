import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant-variable";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login () {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
function handleSubmit(event){
  event.preventDefault();
  axios.post('http://localhost:8080/api/users/login', {email,password})
  .then(res => console.log(res))
  .catch(err=>console.log(err));
}
  return (
    <section className="register">
      <div className="register__container">
        <form className="register__form" onSubmit={handleSubmit}>
          <h2 className="register__title">Login</h2>


          <label htmlFor="email">Email</label>
          <input
            value={email}
             onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
             onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="register__submit" type="submit">
        Login
          </button>
        </form>

      </div>
    </section>
  );
};

export default Login;

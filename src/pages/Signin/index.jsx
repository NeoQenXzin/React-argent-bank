import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState([]);
  //store
  const dispatch = useDispatch();
  const { isLogged, userToken } = useSelector((state) => ({
    ...state.logUserReducer,
  }));

  const navigate = useNavigate();

  const getToken = async () => {
    const emailError = document.querySelector(".email-error");
    const passwordError = document.querySelector(".password-error");
    const errorMessage = document.querySelector(".message-error");
    await axios({
      method: "post",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      url: `${process.env.REACT_APP_API_URL}api/v1/user/login`,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        // console.log(res);
        if (res.data.errors) {
          passwordError.innerHTML = res.data.message;
          emailError.innerHTML = res.data.errors.email;
        } else {
          console.log(res.data.body.token);
          setToken(res.data.body.token);
          dispatch({
            type: "CONNECT",
            payload: token,
          });
          return res.data.body.token;
          // console.log(res);
        }
      })
      .catch((err) => {
        errorMessage.innerHTML = err.response.data.message;
        // console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    getToken();
    // localStorage.setItem("token", JSON.stringify(token));
    console.log(token);
    console.log("token du reducer :", userToken, isLogged);
    navigate("/user");
    // window.location = "/user";
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form action="" onSubmit={handleLogin} id="sign-up-form">
          <div className="input-wrapper">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="email-error"></div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="password-error"></div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="message-error"></div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoHome from "../../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const { isLogged } = useSelector((state) => ({
    ...state.logUserReducer,
  }));
  const dispatch = useDispatch();
  const reset = () => {
    dispatch({
      type: "DISCONNECT",
    });
    localStorage.clear();
    console.log(isLogged);
  };
  return (
    <header>
      <nav>
        <ul className="main-nav">
          <li>
            <Link to="/" className="main-nav-logo">
              <img
                className="main-nav-logo-image"
                src={logoHome}
                alt="Argent Bank Logo"
              />
            </Link>
          </li>
          {isLogged === true ? (
            <li>
              <Link to="/" className="main-nav-logo" onClick={reset}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/signin" className="main-nav-item">
                <i className="fa fa-user-circle"></i> Sign in
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoHome from "../../assets/img/argentBankLogo.png";

export default function Header() {
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
          <li>
            <Link to="/signin" className="main-nav-item">
              <i class="fa fa-user-circle"></i> Sign in
            </Link>
          </li>
          <li>
            <Link to="/user">User </Link>
          </li>
          {/* <div>
        <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./index.html">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div> */}
        </ul>
      </nav>
    </header>
  );
}

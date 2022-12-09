import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function User() {
  const [token, setToken] = useState();
  const [name, setName] = useState();
  const dispatch = useDispatch();

  const reset = () => {
    console.log(name);
    console.log(token);
    console.log(userToken);
    console.log(userName);
    // localStorage.clear();
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    token && setToken(token);
    getData();

    if (token === null) {
      window.location = "/signin";
    }
  }, []);

  // reducer
  const { userToken } = useSelector((state) => ({
    ...state.logUserReducer,
  }));
  const { userName } = useSelector((state) => ({
    ...state.dataUserReducer,
  }));

  // appel api et dispatch
  const getData = () => {
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
    })
      .then((res) => {
        console.log(res);
        setName(res.data.body.firstName + " " + res.data.body.lastName);
        dispatch({
          type: "GETUSERDATA",
          payload: name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Edit
  const editName = () => {
    axios({
      method: "put",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        firstName: "newFirstName",
        lastName: "newLastName",
      },
      url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "EditProfile",
          payload: "data",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main bg-dark">
      <button onClick={reset}>Reset</button>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {name}
        </h1>
        <button className="edit-button" onClick={editName}>
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
}

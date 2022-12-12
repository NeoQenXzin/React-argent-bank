import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Account from "../../components/Account/Account";

export default function User() {
  const dispatch = useDispatch();

  const testVariable = () => {
    // console.log(token);
    console.log({ userToken });
    console.log(firstName);
    console.log({ lastName });

    // localStorage.clear();
  };
  // reducer
  const { userToken } = useSelector((state) => ({ ...state.logUserReducer }));
  console.log({ userToken });

  const {
    userData: { firstName, lastName },
  } = useSelector((state) => ({
    ...state.dataUserReducer,
  }));

  useEffect(() => {
    // const bToken = JSON.parse(localStorage.getItem("token"));
    const bToken = userToken;
    getData(bToken);

    if (userToken === null) {
      window.location = "/signin";
    }
  }, []);

  // appel api et dispatch
  const getData = (bToken) => {
    // console.log(`Bearer ${bToken}`);
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${bToken}`,
      },
      url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
    })
      .then((res) => {
        // console.log(res);
        // setName(res.data.body.firstName + " " + res.data.body.lastName);
        dispatch({
          type: "GETUSERDATA",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Edit
  const editName = () => {
    // const bToken = JSON.parse(localStorage.getItem("token"));
    const bToken = userToken;

    axios({
      method: "put",
      headers: {
        Authorization: `Bearer ${bToken}`,
      },
      data: {
        firstName: "jeanus",
        lastName: "Valdus",
      },
      url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
    })
      .then((res) => {
        // setName(res.data.body.firstName + " " + res.data.body.lastName);
        console.log(res);
        dispatch({
          type: "EDITUSERNAME",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main bg-dark">
      <button onClick={testVariable}>Testeur</button>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${lastName}`}
        </h1>
        <button className="edit-button" onClick={editName}>
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        accountTitle="Argent Bank Checking (x8349)"
        accountAmount="$2,082.79"
        accountAmountDescription="Available Balance"
      />
      <Account
        accountTitle="Argent Bank Savings (x6712)"
        accountAmount="$10,928.42"
        accountAmountDescription="Available Balance"
      />
      <Account
        accountTitle="Argent Bank Credit Card (x8349)"
        accountAmount="$184.30"
        accountAmountDescription="Current Balance"
      />
    </div>
  );
}

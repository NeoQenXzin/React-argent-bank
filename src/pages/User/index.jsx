import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Account from "../../components/Account/Account";
import "./index.css";

export default function User() {
  const dispatch = useDispatch();
  // state
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [toggle, setToggle] = useState(false);

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

  //fonction
  const displayModal = () => {
    !toggle ? setToggle(true) : setToggle(false);
    const modalEdit = document.querySelector(".modal");
    !toggle
      ? modalEdit.classList.remove("hide")
      : modalEdit.classList.add("hide");
  };

  const testVariable = () => {
    console.log({ userToken });
    console.log(firstName);
    console.log({ lastName });
  };

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
        firstName: newFirstName,
        lastName: newLastName,
      },
      url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "EDITUSERNAME",
          payload: res.data,
        });
        displayModal();
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

        {/* Edit  */}
        <button className="edit-button" onClick={displayModal}>
          {!toggle ? "Edit Name" : "X"}
        </button>
        <div className="modal hide">
          <label htmlFor="firstname">New Firstname : </label>
          <input
            type="text"
            className="new-firstname"
            id="firstname"
            onChange={(e) => setNewFirstName(e.target.value)}
          />
          <br />
          <label htmlFor="lastname">New Lastname : </label>
          <input
            type="text"
            className="new-lastname"
            id="lastname"
            onChange={(e) => setNewLastName(e.target.value)}
          />
          <br />
          <button className="edit-button-red" onClick={editName}>
            Edit New Name
          </button>
        </div>
      </div>

      {/* Account  */}
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

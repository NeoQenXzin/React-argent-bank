/* eslint-disable default-case */
const INITIAL_STATE = {
  userData: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    // isLogged: "",
    // token: "",
  },
};

function dataUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GETUSERDATA": {
      console.log("get user data process");
      return {
        ...state,
        userData: {
          firstName: action.payload,
          lastName: action.payload,
        },
      };
    }
  }
  // console.log(state);
  return state;
}

export default dataUserReducer;

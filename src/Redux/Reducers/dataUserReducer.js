/* eslint-disable default-case */
const INITIAL_STATE = {
  userData: {
    firstName: "",
    lastName: "",
  },
};

function dataUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GETUSERDATA": {
      // console.log("get user data process");
      return {
        ...state,
        userData: {
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
        },
      };
    }
    case "EDITUSERNAME": {
      // console.log("edit user data process");
      return {
        ...state,
        userData: {
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
        },
      };
    }
  }
  // console.log(state);
  return state;
}

export default dataUserReducer;

/* eslint-disable default-case */
const INITIAL_STATE = {
  userData: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
};

function dataUserReducer(state, action) {
  switch (action.type) {
    case "GETUSER": {
      return {
        ...state,
        userData: action.payload,
      };
    }
  }
  return state;
}

export default dataUserReducer;

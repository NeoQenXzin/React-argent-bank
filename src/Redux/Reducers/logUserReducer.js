/* eslint-disable default-case */
const INITIAL_STATE = {
  isLogged: false,
  userToken: "",
};

function logUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CONNECT": {
      console.log("Connecté");
      console.log(action.payload);
      return {
        ...state,
        userToken: action.payload,
        isLogged: true,
      };
    }
    case "DISCONNECT": {
      console.log("Déconnecté");
      return {
        ...state,
        userToken: "",
        isLogged: false,
      };
    }
  }
  return state;
}

export default logUserReducer;

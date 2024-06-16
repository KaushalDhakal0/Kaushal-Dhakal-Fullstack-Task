
const initialState = {
    data:null,
    currentUser: null,
    token: null,
    registerSuccess:false,
    loginSuccess:false,
    loggingIn:false,

  };
  
  export  function userReducer(state = initialState, action) {
    switch (action.type) {
     
      default:
        return state;
    }
  }
  
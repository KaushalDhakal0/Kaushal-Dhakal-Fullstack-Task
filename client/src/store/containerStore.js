export const ContainerStore = (state = initialState, action) => {
    // if (action.type === "SET_AUTH_TOKEN") return { ...state, token: action.payload };
    return state
  }
  
  var initialState = {
    token: null,
    permissions: null,
  }
  
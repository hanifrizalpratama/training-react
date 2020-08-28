const initalState = {
    user: null
  };
  
  const userReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "REGISTER":
        return {
          ...state,
          user: payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
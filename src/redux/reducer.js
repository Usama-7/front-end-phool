


const INIT_STATE = {
    carts: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  };
  
  export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ADD_CART":
        const IteamIndex = state.carts.findIndex((item) => item._id === action.payload._id);
        if (IteamIndex >= 0) {
          state.carts[IteamIndex].qnty += 1;
          localStorage.setItem("cart", JSON.stringify(state.carts)); // Update cart in local storage
          return {
            ...state,
            carts: [...state.carts]
          };
        } else {
          const temp = { ...action.payload, qnty: action.payload.quan };
          localStorage.setItem("cart", JSON.stringify([...state.carts, temp])); // Update cart in local storage
          return {
            ...state,
            carts: [...state.carts, temp]
          };
        }
  
      case "RMV_CART":
        const data = state.carts.filter((el) => el._id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(data)); // Update cart in local storage
        return {
          ...state,
          carts: data
        };
  
      case "RMV_ONE":
        const IteamIndex_dec = state.carts.findIndex((item) => item._id === action.payload._id);
        if (state.carts[IteamIndex_dec].qnty >= 1) {
          state.carts[IteamIndex_dec].qnty -= 1;
          localStorage.setItem("cart", JSON.stringify(state.carts)); // Update cart in local storage
          return {
            ...state,
            carts: [...state.carts]
          };
        } else if (state.carts[IteamIndex_dec].qnty === 1) {
          const data = state.carts.filter((el) => el._id !== action.payload);
          localStorage.setItem("cart", JSON.stringify(data)); // Update cart in local storage
          return {
            ...state,
            carts: data
          };
        }
  
      case "ADD_ONE":
        const IteamIndex_inc = state.carts.findIndex((item) => item._id === action.payload._id);
        if (state.carts[IteamIndex_inc].qnty >= 1) {
          state.carts[IteamIndex_inc].qnty += 1;
          localStorage.setItem("cart", JSON.stringify(state.carts)); // Update cart in local storage
          return {
            ...state,
            carts: [...state.carts]
          };
        } else if (state.carts[IteamIndex_inc].qnty === 1) {
          const data = state.carts.filter((el) => el._id !== action.payload);
          localStorage.setItem("cart", JSON.stringify(data)); // Update cart in local storage
          return {
            ...state,
            carts: data
          };
        }
  
      case "RMV_ALL":
        localStorage.removeItem("cart"); // Remove cart from local storage
        state = INIT_STATE;
        return state;
  
      default:
        return state;
    }
  };
  
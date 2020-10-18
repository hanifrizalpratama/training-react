const initalState = {
    Cart: [],
  };
  
  const cart = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'AddCart':
          let idAlreadyExists = false;
          let Cart = state.Cart.slice();
    
          state.Cart.map((item, key) => {
            if (item.product_id === payload.product_id) {
              idAlreadyExists = true;
            }
          });
    
          if (idAlreadyExists) {
            let objIndex = state.Cart.findIndex(obj => obj.product_id == payload.product_id);
            state.Cart[objIndex].qty = state.Cart[objIndex].qty + payload.qty;
            console.log(state.Cart[objIndex].qty);
          } else {
            Cart.push(payload);
          }
          return {
            ...state,
            Cart,
          };
    
        default:
          return state;
      }
  };
  
  export default cart;
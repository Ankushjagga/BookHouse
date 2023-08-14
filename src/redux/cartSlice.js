import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   cartItems:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
//   totalQuantity:0,
//   totalAmount:0,
// }
const cartSlice = createSlice({
 

  name: "cart",
  initialState: {
    // items:[],
  items:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],

     total_item: "",
  total_amount: 0,
  shipping_fees: 50,
  },
  reducers: {
    addItem: (state, action) => {
      const cartItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id);

    if(cartItemIndex >= 0) {
        state.items[cartItemIndex].amount += 1;

  
    }

    else {
        const tempProduct = {...action.payload, amount:1};
        state.items.push(tempProduct);
       
    }
localStorage.setItem("cart", JSON.stringify(state.items))
    },
    removeItem: (state, action) => {
   let updatestate=   state.items.filter(
        (curItem)=>curItem._id !== action.payload
      )
    
      state.items = updatestate
        localStorage.setItem('cart', JSON.stringify(state.items))
      
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify(state.items))

    },
    
    setIncrease:(state,action)=>{
      const itemIndex= state.items.findIndex(
        cartItem => cartItem._id === action.payload
    )
        state.items[itemIndex].amount+= 1;
        localStorage.setItem('cart', JSON.stringify(state.items))

    },
setDecrease:(state,action)=>{
  const itemIndex= state.items.findIndex(
    cartItem => cartItem._id === action.payload
)

if(state.items[itemIndex].amount > 1) {
    state.items[itemIndex].amount-= 1;
}

else if(state.items[itemIndex].amount === 1) {
    const inCartItems =  state.items.filter(
        cartItem => cartItem._id!==action.payload
    );
    state.cartItems=inCartItems;
}
localStorage.setItem('cart', JSON.stringify(state.items))

},

  totalamount:(state,action)=>{
    let updateamount = state.items.reduce((initialval,curelem)=>{
      let {amount , price} = curelem;
      initialval = initialval+ amount * price;
      return initialval
  }, 0)
  return {
      ...state,
      total_amount: updateamount
  }
  }
}
});

export const { addItem, removeItem, clearCart , setIncrease, setDecrease, totalamount} = cartSlice.actions;

export default cartSlice.reducer;
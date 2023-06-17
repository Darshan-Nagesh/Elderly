import { createSlice } from "@reduxjs/toolkit";

const initialstate={
	cartItem:[],
	cartTotalQuantity:0,
	cartTotalAmount:0,
	userId:" ",
}

const cartSlice=createSlice({

	name:"cart",
	initialState:initialstate,
	reducers:{
		addToCart:(state,action)=>
		{
			const product=action.payload;
			//console.log(product);
			const existingIndex = state.cartItem.findIndex(
				(item) => item.product._id === action.payload._id
			  );
			  if(existingIndex>=0)
			  {
				state.cartItem[existingIndex].quantity++;
				state.cartTotalQuantity++;
				let total=state.cartTotalAmount
				state.cartTotalAmount=product.price+total;
				console.log(state.cartItem);
			  }
			  else
			  {
				state.cartItem.push({product,quantity:1});
				console.log(state.cartItem);
			  }
		},
		removeFromCart:(state,action)=>
		{
			const existingItem = state.cartItem.findIndex(item => item.product._id === action.payload._id);
      if (existingItem != -1) {
		const product=action.payload;
		if (state.cartItem[existingItem].quantity > 1) {
			state.cartItem[existingItem].quantity -= 1;
		  }
		  else{
			 
			  state.cartItem.splice(existingItem, 1);
		  }
		  let total=state.cartTotalAmount
		  state.cartTotalAmount=total-product.price;
		  state.cartTotalQuantity--;
      }
	  
		},
		setuserid:(state,action)=>
		{
			state.userId=action.payload;
		},

	}
}
)

export const {addToCart,removeFromCart,setuserid}=cartSlice.actions;
export default cartSlice.reducer;
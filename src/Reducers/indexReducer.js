
const initialState = {
    carts: [],
};

const mainReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            const productIndex = state.carts.findIndex(
                (product)=> product._id === action.payload._id
            );
            if (productIndex >= 0) {
                state.carts[productIndex].quantity += 1;
            }else{
              const tempCart =  {...action.payload, quantity:1}
              return {
                ...state,
                carts:[...state.carts, tempCart]
              }
            }
        case "REMOVE_FROM_CART":
            const removeItem = state.carts.filter((item)=>item._id !== action.payload)
            return{
                ...state,
                carts : removeItem
            }
        
        case "DECREMENT_ITEM":
            const itemDecrement = state.carts.findIndex(
                (product)=> product._id === action.payload._id);
            if(state.carts[itemDecrement].quantity >= 1){
                 state.carts[itemDecrement].quantity -= 1;
                return {
                    ...state,
                    carts: [...state.carts ]
                }
            }
        default:
            return state
    }
}

export default mainReducer;


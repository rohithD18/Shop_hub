export const addToCart = (item) =>{
    return {
        type: "ADD_TO_CART",
        payload:item,
    }
}

export const removeFromCart = (_id) =>{
    return {
        type: "REMOVE_FROM_CART",
        payload: _id,
    } 
}

export const decrementItem = (item)=>{
    return {
        type: "DECREMENT_ITEM",
        payload:item
    }
}


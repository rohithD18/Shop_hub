import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart,decrementItem } from "../../Actions/action";



function Cart() {
  const [quantity, setQuantity] = useState();
  const [cost, setCost] = useState(0)
  const cartData = useSelector((state)=>state.mainReducer.carts)
  // console.log(cartData);

  const dispatch = useDispatch();

  const deleteItem = (_id)=>{
    dispatch(removeFromCart(_id))
  }

  const totalCost = ()=>{
    let cost = 0;
    cartData.map((item)=>{
      cost = item.price * item.quantity + cost
    });
    setCost(cost);
  }
  useEffect(()=>{
    totalCost();
  },[totalCost])
//   console.log(cost);

  const send =(e)=>{
  // console.log(e);
  dispatch(addToCart(e));
  }

  const decrease = (item)=>{
    dispatch(decrementItem(item))
  }

  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div> <br/>
      <div>
      {cartData.length === 0 ? (
        <div className="cart-header"><h3>Cart is Empty</h3></div>
      ) : (<> 
      <div className="cart-list">
          {cartData.map((item, index) =>(
            <ul key={index} >
            <li  className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} width="90" height="38" alt="cart item" />
              </div>
              <div className="cart-item-name">
                <span>{item.name} </span>
              </div>
              <div className="cart-item-qty">
                {item.quantity > 1 ? (
                  <span onClick={() => decrease(item)}>
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                  </span>
                ) : (
                  <span onClick={()=>deleteItem(item._id)} className="cart-delete-item">
                    <FontAwesomeIcon icon={["far", "trash-alt"]} />
                  </span>
                )}
                <p >{item.quantity}</p>
                <span onClick={() => send(item)}>
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
              </div>
              <div className="cart-item-price">${item.price * item.quantity}</div>
            </li>
            </ul>
          ))}
        
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
          <h4>Total :${cost} </h4>
          <span></span>
        </div>
        <div className="cart-shipping">
          <h4>Shipping :</h4>
          <span>Free Shipping</span>
        </div>
        <div className="cart-checkout-button">
          <button>Proceed to Checkout</button>
        </div>
      </div>
      </>    
 ) }
 </div>
    </div>
  );
}

export default Cart;

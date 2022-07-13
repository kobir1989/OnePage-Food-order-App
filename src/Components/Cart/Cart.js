import React from 'react';
import classes from './Cart.module.css';

import PopUp from '../UI/PopUp';
const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amout: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <PopUp onCloseCart={props.onCloseCart}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.65</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes['button--alt']}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Place Order</button>
        </div>
      </div>
    </PopUp>
  );
};

export default Cart;

import React from 'react';
import classes from './Cart.module.css';
import { useContext } from 'react';
import PopUp from '../UI/PopUp';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

/////////////////////////////////////////////////////////////////

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <PopUp onCloseCart={props.onCloseCart}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes['button--alt']}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          {hasItems && <button className={classes.button}>Place Order</button>}
        </div>
      </div>
    </PopUp>
  );
};

export default Cart;

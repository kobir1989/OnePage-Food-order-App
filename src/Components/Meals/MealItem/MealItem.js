import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import React from 'react';
import Card from '../../UI/Card';
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';

/////////////////////////////////////////////////////////////////

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Card>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addItemToCartHandler} />
        </div>
      </li>
    </Card>
  );
};

export default MealItem;

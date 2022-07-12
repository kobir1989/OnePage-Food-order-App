import classes from './Header.module.css';
import { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='Food.jpg' />
      </div>
    </Fragment>
  );
}

export default Header;

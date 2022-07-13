import Header from './Components/Layout/Header';
import React, { Fragment, useState } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
function App() {
  const [cartIsShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

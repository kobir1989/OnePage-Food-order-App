import Header from './Components/Layout/Header';
import React, { useState } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

///////////////////////////////////////////////////////////////////////

function App() {
  const [cartIsShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

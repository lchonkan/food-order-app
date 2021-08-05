//this compoment is in charge of managing cart context data and providing the cart context to all components that need access to it.

import CartContext from './cart-context';

const CartProvider = props => {
  //these are the handlers for updating the context
  const addItemToCartHandler = item => {};
  const removeItemFromCartHandler = id => {};

  // This is the actual context that gets updated and the initial values
  const cartContext = {
    items: [],
    amount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // the return statement provides the context to props.children
  // i.e. to whatever component is being wrapped by this provider
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

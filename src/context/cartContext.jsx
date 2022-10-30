import { createContext, useState } from "react";
const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          return prod.id === item.id
            ? { ...prod, count: prod.count + count }
            : prod;
        })
      );
    } else setCart([...cart, { ...item, count }]);
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((item) => item.id !== idToRemove);
    setCart(newCart);
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getTotalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  }

  function isInCart(id) {
    if (cart.find((item) => item.id === id)) return true;
    else return false;
  }
  function clearCart() {
    setCart([]);
  }
  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addToCart,
          getTotalItemCount,
          removeItem,
          getTotalPrice,
          isInCart,
          clearCart,
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };

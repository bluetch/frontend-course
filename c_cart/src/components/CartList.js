import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { CartItem } from "./CartItem";
import { CartContext } from "./../services/cart/CartContext";
import { REMOVE_CART_ITEM } from "./../services/cart/action-types";
import styles from "./cartList.module.scss";

export const CartList = ({ closeCart, show }) => {
  const displayModal = show ? "open" : "close";
  const { cartItem, dispatch } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  
  const calculateTotal = () => {
    let totalAmount = 0;
    let totalCart = 0;
    cartItem.map((item) => {
      totalAmount = totalAmount + item.count * parseFloat(item.productPrice);
      totalCart = totalCart + item.count;
    });
    setTotalPrice(totalAmount);
    setTotalCartItems(totalCart);
  };

  const removeFromCart = (item) => {
    item.isAddedtoCart = false;
    item.count = 0;
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: item,
    });
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItem]);

  return (
    <div className={`modal ${displayModal}`}>
      <button className="close" onClick={() => closeCart()}>關閉</button>
      <div className="flex">
        {cartItem.length > 0 ? (
          <div>
            <h1>Cart</h1>
            <h2>{totalCartItems}樣商品</h2>
            <div className="cart-container">
              {cartItem.map((item) => {
                return (
                  <CartItem
                    cartObj={item}
                    key={item.id}
                    removeFromCart={removeFromCart}
                  />
                )
              })}
            </div>
          </div>
        ) : (
          <div className={styles.empty}>Your cart is empty</div>
        )}
        <div className={styles.total}>
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
        <div className={styles.actions}>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  )
}
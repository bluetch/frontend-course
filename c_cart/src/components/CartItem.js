import styles from "./cartItem.module.scss";

export const CartItem = ({ cartObj, removeFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <img src={cartObj.image} alt={cartObj.productName} className={styles.img} />
      <div className={styles.content}>
        <p>{cartObj.productName}</p>
        <p>quantity: {cartObj.count}</p>
      </div>
      <p>${cartObj.productPrice}</p>
      <button className={styles.btnClose} onClick={() => removeFromCart(cartObj)}>移除</button>
    </div>
  )
}
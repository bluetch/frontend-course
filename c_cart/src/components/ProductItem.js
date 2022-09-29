import { useEffect, useState } from "react";
import { Button } from "./Button";
import styles from "./productItem.module.scss";

export const ProductItem = ({ product, addToCart, incrementItem, decrementItem }) => {

  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    setProductItem(product);
  }, [product]);

  console.log(productItem)
  return (
    <div className={styles.productCard}>
      <img src={productItem.image} alt="" />
      <p>{productItem.productName}</p>
      <p>剩餘數量：{productItem.count}</p>
      <p>${productItem.productPrice}</p>
      {productItem.isAddedtoCart ? (
        <div className={styles.actions}>
          <Button onClick={() => decrementItem(productItem)} disabled={productItem.count <= 1}>-</Button>
          <span className={styles.count}>{productItem.count}</span>
          <Button onClick={() => incrementItem(productItem)}>+</Button>
        </div>
      ) : (
        <Button
          onClick={() => addToCart(productItem)}>
          Add to Cart
        </Button>
      )}
    </div>
  )
}
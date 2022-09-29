import { useEffect, useState } from "react";
import { Button } from "./Button";

export const ProductCard = ({ product, addToCart, removeFromCart, incrementItem, decrementItem }) => {

  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    setProductItem(product);
  }, [product]);

  return (
    <div className="productCard">
      <img src={productItem.image} alt="" />
      <p>{productItem.productName}</p>
      <p>${productItem.productPrice}</p>
      {productItem.isAddedtoCart ? ("d") : (
        <Button
          onClick={() => addToCart(productItem)}>Add to Cart</Button>
      )}
    </div>
  )
}
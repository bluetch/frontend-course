import { useEffect, useContext } from "react";

import { CartContext } from "./../services/cart/CartContext";
import { ProductContext } from "../services/product/ProductContext";
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_COUNT,
} from "./../services/cart/action-types";
import { FETCH_PRODUCTS } from "./../services/product/action-types";

import { ProductCard } from "./ProductCard";
import { mockProducts } from "./../mock/product";

export const ProductList = () => {
  const { cartItem, dispatch } = useContext(CartContext);
  const { products, productDispatch } = useContext(ProductContext);

  const fetchProducts = () =>{
    // 有API的話從這邊拉
    const data = mockProducts;
    productDispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    })
  }

  const addToCart = (item) => {
    item.isAddtoCart = true;
    item.count = 1;
    dispatch({
      type: ADD_CART_ITEM,
      payload: item,
    })
  }

  const removeFromCart = () => {

  }

  const incrementItem = () => {

  }
  const decrementItem = () => {

  }

  // useEffect(()=>{
  //   console.log("Cart item updated")
  // },[cartItem]);

  useEffect(()=>{
    fetchProducts();
  },[])

  useEffect(()=>{
console.log(products)
  },[products])

  return (
    <div className="grid">
      {products.items ? products.items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
          />
        )
      }) : ""}
    </div>
  )
}
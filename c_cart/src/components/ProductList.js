import { useEffect, useContext } from "react";

import { CartContext } from "./../services/cart/CartContext";
import { ProductContext } from "../services/product/ProductContext";
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_COUNT,
} from "./../services/cart/action-types";
import { FETCH_PRODUCTS } from "./../services/product/action-types";

import { ProductItem } from "./ProductItem";
import { mockProducts } from "./../mock/product";
import styles from "./productList.module.scss";

export const ProductList = () => {
  const { cartItem, dispatch } = useContext(CartContext);
  const { products, productDispatch } = useContext(ProductContext);

  const fetchProducts = () => {
    // 有API的話從這邊拉
    const data = mockProducts;
    productDispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    })
  }

  const addToCart = (item) => {
    item.isAddedtoCart = true;
    item.count--;
    dispatch({
      type: ADD_CART_ITEM,
      payload: item,
    })
  }

  const removeFromCart = (item) => {
    item.isAddedtoCart = false;
    item.count = 0;
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: item,
    });
  };

  const incrementItem = (item) => {
    item.isAddedtoCart = true;
    if (item.count > 0) {
      item.count = item.count + 1;
    }
    dispatch({
      type: UPDATE_CART_ITEM_COUNT,
      payload: item,
    });
  };

  const decrementItem = (item) => {
    item.isAddedtoCart = true;
    if (item.count > 0) {
      item.count = item.count - 1;
    }
    dispatch({
      type: UPDATE_CART_ITEM_COUNT,
      payload: item,
    });
  };

  useEffect(() => {
    console.log("Cart item updated")
  }, [cartItem]);

  useEffect(() => {
    fetchProducts();
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className={styles.productList}>
      {products.items ? products.items.map((item) => {
        return (
          <ProductItem
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
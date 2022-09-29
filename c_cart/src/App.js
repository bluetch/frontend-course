import { useEffect, useReducer, useState } from 'react';
import { ProductList } from './components/ProductList';
import { CartList } from "./components/CartList";
import ProductReducer from "./services/product/reducer";
import CartReducer from "./services/cart/reducer";
import { CartContext } from "./services/cart/CartContext";
import { ProductContext } from "./services/product/ProductContext";
import './styles/global.scss';

function App() {
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [cartItem, dispatch] = useReducer(CartReducer, []);
  const [products, productDispatch] = useReducer(ProductReducer, []);
  const [cartModal, setCartModal] = useState({ show: false });

  const openCart = () => {
    setCartModal({ show: true });
  }

  const closeCart = () => {
    setCartModal({ show: false });
  }

  const calculateCartItems = () => {
    let totalCart = 0;
    cartItem.map(item => {
      totalCart = totalCart + item.count;
    })
    setTotalCartItems(totalCart);
  }

  useEffect(() => {
    calculateCartItems();
  }, [cartItem]);

  return (
    <ProductContext.Provider value={{ products, productDispatch }}>
      <CartContext.Provider value={{ cartItem, dispatch }}>
        <header className="header">
          <h1>Ken's Shop</h1>
          <button className="cart" onClick={openCart}>
            購物車
            <span className="cart-badge">{totalCartItems}</span>
          </button>
        </header>
        <ProductList />
        <CartList closeCart={closeCart} show={cartModal.show} />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;

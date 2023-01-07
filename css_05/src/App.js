import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log("open", open)
  }, [open])
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>SITE NAME</h1>
          <nav className={open ? "open" : "" }>
            <a href="">Products</a>
            <a href="">Solutions</a>
            <a href="">Pricing</a>
            <a href="">Learn</a>
            <a href="">Contact</a>
          </nav>
          <button className="toggle-menu" onClick={toggleMenu}>
            <img src="images/icon_menu.png" alt="" />
          </button>
        </div>
      </header>
      <main>
        <div className="hero">
          <img src="images/banner.jpeg" alt="" />
        </div>
        <div className="container">
          <h2 className="title">品牌旗艦</h2>
          <div className="sales">
            <a href="">
              <img src="images/product_01.jpeg" alt="" />
              <h3>LocknLock樂扣樂扣</h3>
              <h6>暖心杯瓶6折up</h6>
            </a>
            <a href="">
              <img src="images/product_02.png" alt="" />
              <h3>Simply新普利</h3>
              <h6>滿$399折100</h6>
            </a>
            <a href="">
              <img src="images/product_03.png" alt="" />
              <h3>怡悅清淨機濾網第一品牌</h3>
              <h6>滿$1500 85折最高折抵$400</h6>
            </a>
            <a href="">
              <img src="images/product_04.png" alt="" />
              <h3>橘子工坊</h3>
              <h6>年前必屯 享5%蝦幣</h6>
            </a>
            <a href="">
              <img src="images/product_05.jpeg" alt="" />
              <h3>愛買線上購物</h3>
              <h6>滿額抽SWITCH</h6>
            </a>
            <a href="">
              <img src="images/product_06.jpeg" alt="" />
              <h3>米鴻生醫</h3>
              <h6>熱銷保健品牌</h6>
            </a>
          </div>
        </div>
      </main>
      <footer className="footer">
        copyright 2022 Shopee
      </footer>
    </div>
  );
}

export default App;

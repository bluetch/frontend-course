import { useEffect, useState } from 'react';

export const Home = () => {
  return (
    <main>
      <div className="hero">
        <div className="container">
          <img src="images/banner.jpeg" alt="" />
          <div className="highlight">
            <a href="">
              <img src="images/highlight_01.png" alt="" />
              <h6>免運!蝦皮直送</h6>
            </a>
            <a href="">
              <img src="images/highlight_02.png" alt="" />
              <h6>蝦皮超市</h6>
            </a>
            <a href="">
              <img src="images/highlight_03.png" alt="" />
              <h6>領券折$5,000</h6>
            </a>
            <a href="">
              <img src="images/highlight_04.png" alt="" />
              <h6>蝦皮3C家電</h6>
            </a>
            <a href="">
              <img src="images/highlight_05.png" alt="" />
              <h6>週日商城日</h6>
            </a>
            <a href="">
              <img src="images/highlight_06.png" alt="" />
              <h6>領3張免運倒數</h6>
            </a>
            <a href="">
              <img src="images/highlight_07.png" alt="" />
              <h6>蝦皮實名認證</h6>
            </a>
            <a href="">
              <img src="images/highlight_08.png" alt="" />
              <h6>蝦幣回饋</h6>
            </a>
            <a href="">
              <img src="images/highlight_09.png" alt="" />
              <h6>蝦皮超便宜</h6>
            </a>
            <a href="">
              <img src="images/highlight_10.png" alt="" />
              <h6>活動合集</h6>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sales">
          <h2 className="title">品牌旗艦</h2>
          <div className="grid">
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
      </div>
    </main>
  );
}

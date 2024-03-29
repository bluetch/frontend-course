import { ProductItem } from "./ProductItem";
import styles from "./productList.module.scss";

const data = [
  {
    id: 2012389012783,
    name: "江振誠主廚推薦-減醣千張三星蔥鮮肉大雲吞",
    price: "180",
    img: "https://cf.shopee.tw/file/464277065e82b32e3940288fadbfa120",
  },
  {
    id: 12308912903,
    name: "懶人臥室 坐墊 地上屁股 墊子 辦公室 椅子墊 宿舍椅墊 榻榻米 坐墊靠背 宿舍神器【Amanda】",
    price: "570",
    img: "https://cf.shopee.tw/file/eaa2325a0183fd6140d596b6c64d2c79",
  },
  {
    id: 12389012,
    name: "「挑傢俱」英式鄉村風 小邊櫃/茶几/邊桌/收納櫃/床頭櫃",
    price: "1449",
    img: "https://cf.shopee.tw/file/2aef46ae17c562128fde6483f5a19983",
  },
  {
    id: 1237890789,
    name: "浴室防滑墊免洗吸水速乾衛生間臥室地墊天然硅藻泥洗澡間腳墊家用",
    price: "167",
    img: "https://cf.shopee.tw/file/806b2d250d0edb197173cc5d7c1bf83c",
  },
];

export const ProductList = () => {

  return (
    <section className={styles.grid}>
      {data.map((item)=>{
        return(
          <ProductItem item={item} key={item.id}/>
        )
      })}
    </section>
  )
}
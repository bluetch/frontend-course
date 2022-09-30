import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "./productItem.module.scss";

export const ProductItem = ({ item }) => {

  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
  }

  return (
    <div style={themeStyles}>
      <div className={styles.productItem}>
        <img src={item.img} alt="" style={styles.img}/>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        </div>
    </div>
  )
}
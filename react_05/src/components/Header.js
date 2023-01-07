import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Header = () => {

  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#ccc" : "#333",
  }

  return (
    <header style={themeStyles}>
      Ken購物中心
    </header>
  )
}
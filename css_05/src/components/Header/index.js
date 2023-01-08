import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <div className="container">
        <h1>蝦皮購物</h1>
        <nav className={open ? "open" : ""}>
          <a href="/products">Products</a>
          <a href="">Solutions</a>
          <a href="">Pricing</a>
          <a href="">Learn</a>
          <a href="">Contact</a>
        </nav>
        <button className="toggle-menu" onClick={toggleMenu}>
          {open ? (
            <img src="images/icon_close.svg" alt="" />
          ) : (
            <img src="images/icon_menu.svg" alt="" />
          )}
        </button>
      </div>
    </header>
  )
}
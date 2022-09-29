export const CartList = ({ closeCart, show }) => {
  const displayModal = show ? "open" : "close";
  return (
    <div className={`modal ${displayModal}`}>
      <button className="close" onClick={() => closeCart()}>關閉</button>
      <div className="flex">
        <h1>Cart</h1>
      </div>
    </div>
  )
}
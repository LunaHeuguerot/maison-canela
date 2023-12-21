import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import "./Order.css";

export const Order = () => {
  const { orderID } = useContext(FirebaseContext);
  const { cartItems, totalCartItems } = useContext(CartContext);

  return (
    <div className="order-container">
      <h2 className="order-title">¡Tu pedido ha sido realizado con éxito!</h2>
      <h3 className="order-number">Tu número de orden es: {orderID}</h3>
      <h5 className="order-details">Detalle del pedido:</h5>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="order-item">{item.quantity} - {item.name}</li>
        ))}
      </ul>
      <p>Total carrito: ${totalCartItems}</p>
    </div>
  )
}

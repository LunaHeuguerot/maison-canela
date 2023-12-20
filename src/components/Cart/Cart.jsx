import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { FirebaseContext } from "../../context/FirebaseContext";
import "./Cart.css";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalCart, removeItem, updateItemQuantity } = useContext(CartContext);

  //FORM
  const { addOrderDB } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      return Swal.fire({
        icon: "error",
        title: "Carrito de compras vacío",
        text: "Agregar productos para poder continuar",
        timerProgressBar: true,
        timer: 5000
      });
    } else {
      navigate("/confirmar-compra");
    }
  };

  //FORM
  const handleForm = (e) => {
    e.preventDefault();

    addOrderDB(cartItems, {name, email}, totalCart);
    
    setName("");
    setEmail("");
  };

  return (
    <div className="cart-container"> 
      <h2>Mi Carrito</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item"> 
            <p>Nombre: {item.name}</p>
            <p>Precio Unitario: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub total: ${item.subTotal}</p>
            <div>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
        ))}
      <p style={{ fontWeight:"bold", color:"#444444", fontSize: "larger" }}>Total del carrito: ${totalCart}</p>
      </div>
  
      <div className="cart-form">
        <form onSubmit={handleForm}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>
          <br />
          <button onClick={handleConfirmOrder}>Confirmar compra</button>
        </form>
      </div>

    </div>
  );
};
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";

export const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, totalCartItems, removeItem, updateItemQuantity } = useContext(CartContext)

  const handleConfirmOrder = () => {
      if (cartItems.length === 0) {
          Swal.fire({
              title: "Carrito de compras vacio",
              text: "Por favor, agrega productos antes de finalizar la compra",
              icon: "error"
          })

      } else {
          navigate("/confirmar-compra")
          
      }
  }


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
      <p style={{ fontWeight:"bold", color:"#444444", fontSize: "larger" }}>Total del carrito: ${totalCartItems}</p>
      <button onClick={handleConfirmOrder}>Confirmar compra</button>
      </div>
  
      
      

    </div>
  );
};
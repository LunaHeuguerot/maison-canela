import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalCart, removeItem, updateItemQuantity } = useContext(CartContext);

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

  return (
    <div>
      <h2>Carrito</h2>
      
    
      
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>Nombre: {item.name}</p>
            <p>Precio Unitario: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub total: ${item.subTotal}</p>
            <div>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      
      <p>Total del carrito: ${totalCart}</p>
      <button onClick={handleConfirmOrder}>Confirmar compra</button>
    </div>
  );
};
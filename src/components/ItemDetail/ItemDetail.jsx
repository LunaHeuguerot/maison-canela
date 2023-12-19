import React, { useState } from "react";
import styles from "./ItemDetail.module.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
  const { addItem } = useCart();



  const onAdd = (items) => {
    addItem({
      id,
      name,
      img,
      price
    }, items);
  
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500
    });
  };
  

  return (
    <div className="border m-2 p-3">
      <div className={`row ${styles.card}`}>
        <div className="col-md-12">
          <div className="card-body text-center">
            <h5 className={`${styles.titulo} mt-4`}>{name}</h5>
            <img className={`${styles.imagen} img-fluid`} src={img} alt="" />
            <p className={`${styles.descrip}`}>{description}</p>
            <p className={`${styles.descrip}`}>Precio: {price}</p>
            <div className="d-flex justify-content-center align-items-center">
              <ItemCount stock={stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
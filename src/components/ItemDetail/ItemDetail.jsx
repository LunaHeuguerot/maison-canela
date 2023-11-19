import styles from "./ItemDetail.module.css";
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail = ({ name, description, img, price, stock }) => {
   
    const onAdd = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
     }

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
                <button className={`${styles.card} button`}>Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>   

    );
  };
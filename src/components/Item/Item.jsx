import styles from "./Item.module.css";
import { Link } from "react-router-dom";

export const Item = ( {id, name, img, description } ) => {
  return (
    <div>
      <div className={`${styles.card}`}>
        <div >
          <h5 className={`${styles.titulo}`}>{name}</h5>
          <img className={`${styles.imagen}`} src={img} alt="" />
          <p className={`${styles.descrip}`}> {description} </p>
          <Link to={`/item/${id}`}>
            <button className={`btn ${styles.button}`}>Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
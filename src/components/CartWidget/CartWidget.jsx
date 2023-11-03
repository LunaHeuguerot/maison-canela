import styles from "./CartWidget.module.css";
import { GrCart } from "react-icons/gr";


export const CartWidget = () => {
    return (
        <div className="d-flex" >
            <GrCart className={styles.carrito} size={25} />
            <p className="mx-2">    1    </p>
        </div>
      )
}
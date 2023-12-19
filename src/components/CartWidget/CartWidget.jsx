import styles from "./CartWidget.module.css";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


export const CartWidget = () => {
    const { totalQuantity } = useCart();


    return (

        <Link to="/cart">
            <div className="d-flex" >
                <GrCart className={styles.carrito} size={25} />
                <p className="mx-2">{totalQuantity}</p>
            </div>
        </Link>
      )
}
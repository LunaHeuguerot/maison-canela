import styles from "./ItemCount.module.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className={`${styles.countContainer} d-flex flex-column col-2 justify-content-center align-content-center p-4`}>
      <div>
        <button className={`${styles.btn} btn btn-outline-secondary mx-3`} onClick={increment} >
          +
        </button>
        <strong>{count}</strong>
        <button className={`${styles.btn} btn btn-outline-secondary mx-3`} onClick={decrement}>
          -
        </button>
      </div>
      <div>        
        <button className={`${styles.card} button`} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
      
      
    </div>
  );
};
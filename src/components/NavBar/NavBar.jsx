import styles from "./NavBar.module.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
      <nav className="d-flex justify-content-between p-3 ml-1" >
          <img src="/img/logo.png" alt="" style={{width: "150px"}}/>
          <div>
          <button className={`btn mx-2 ${styles.botones}`} >Home</button>
          <button className={`btn mx-2 ${styles.botones}`}>Productos</button>
          <button className={`btn mx-2 ${styles.botones}`}>Contactos</button>
        </div>
        <CartWidget />
      </nav>
    )
  }
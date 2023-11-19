import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
      <nav className="d-flex justify-content-between p-3 ml-1" >
          <img src="/img/logo.png" alt="" style={{width: "150px"}}/>
          <div>
          <Link to="/">
            <button className={`btn mx-2 ${styles.botones}`} >Home</button>
          </Link>
          <Link to="/category/baño">
            <button className={`btn mx-2 ${styles.botones}`}>Baño</button>
          </Link>
          <Link to="/category/cocina">
            <button className={`btn mx-2 ${styles.botones}`}>Cocina</button>
          </Link>
          <Link to="/category/muebles">
            <button className={`btn mx-2 ${styles.botones}`}>Muebles</button>
          </Link>
        </div>
        <CartWidget />
      </nav>
    )
  }
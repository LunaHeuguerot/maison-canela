import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

export const ItemListContainer = () => {
  const { product, products, isLoading, getProductsDB, getProductById } = useContext(FirebaseContext);
  // const { totalQuantity } = useContext(CartContext);

  const { category } = useParams();


  useEffect(() => {
    getProductsDB(category);
    getProductById("");

    console.log(product)
    
  }, [category]); 
  
    return <>{isLoading ? <div className="text-center"><img className={`${styles.loading}`} src="/img/loading.gif" alt="" /></div> : <ItemList products={products} />}</>;
  };
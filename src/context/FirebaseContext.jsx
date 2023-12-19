import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";


export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ( {children} ) =>{

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const getProductsDB = async (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    const resp = await getDocs(myProducts);
    if (resp.size === 0) {
    }

    const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(productList);
    setIsLoading(false);
  };

  const getProductById = async (id) => {
    const productRef = doc(db, "products", id);
    const resp = await getDoc(productRef);
    if (resp.exists()) {
      const prod = {
        id: resp.id,
        ...resp.data()
      };
      setProduct(prod);
    }
  };

  const addOrderDB = (cartProducts, userData, total) => { 
    const newOrder = {
      buyer: userData,
      items: cartProducts,
      data: serverTimestamp(),
      total
    }
    console.log(newOrder)
    addDoc( collection(db, "orders"), newOrder );
  }

    const objectValue = {
        products,
        product,
        isLoading,
        getProductsDB,
        getProductById,
        // discountStock,
        addOrderDB

    }
    
    return <FirebaseContext.Provider value={{}}> {children} </FirebaseContext.Provider>
}
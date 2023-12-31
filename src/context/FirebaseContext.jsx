import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null)

export const FirebaseContextProvider = ({ children }) => {
    const [orderId, setOrderId] = useState("");

    const addOrderDB = async (cartItems, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartItems,
            data: serverTimestamp(),
            total,
        } 
        const orderRef = await addDoc(collection(db, "orders"), newOrder);
        return setOrderId(orderRef.id);
    }

    const contextValue = {
        addOrderDB,
        orderId,
    }

    return <FirebaseContext.Provider value={contextValue}>{children}</FirebaseContext.Provider>

}
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const nav = useNavigate()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const itemRef = doc(db, 'products', id);
          const docSnap = await getDoc(itemRef);
          
          if (docSnap.exists()) {
            setItem({ id: docSnap.id, ...docSnap.data() });
          } else {
            console.log("el producto no existe")
            .then((result) => {
              
              if (result.isConfirmed) {
                nav("/");
              }
            });
          }
        } catch (error) {
          console.error('Error');
        }
      };
  
      
      fetchData();
    }, [id, nav]);
  return (
    <>
      {item && <ItemDetail {...item} />}
    </>
  )
}
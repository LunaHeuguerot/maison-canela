import { useState, useEffect } from 'react';
import { Item } from '../Item/Item';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig'; 

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, 'products');

    // Realiza la consulta a la colección
    const unsubscribe = onSnapshot(productsCollection, (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []); 

  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

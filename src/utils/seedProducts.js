import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
    { name: "Cesto Ropa", img: "/img/fotos-prods/cesto-ropa.webp", price: 100, category: "baño", description: "Cesto para ropa sucia", stock: 10 },
    { name: "Cubiertos", img: "/img/fotos-prods/cubiertos.webp", price: 100, category: "cocina", description: "Set de 24 cubiertos", stock: 10 },
    { name: "Cuchara", img: "/img/fotos-prods/cuchara.webp", price: 100, category: "cocina", description: "Cuchara cerámica", stock: 10 },
    { name: "Mesa Hierro", img: "/img/fotos-prods/mesa-hierro.webp", price: 100, category: "muebles", description: "Mesa ratona de hierro", stock: 10 },
    { name: "Set Baño", img: "/img/fotos-prods/set-baño.webp", price: 100, category: "baño", description: "Set 4 piezas para baño", stock: 10 },
    { name: "Tasa", img: "/img/fotos-prods/tasa.webp", price: 100, category: "cocina", description: "Tasa de cerámica", stock: 10 },
    { name: "Vaso Vidrio", img: "/img/fotos-prods/vaso-vidrio.webp", price: 100, category: "cocina", description: "Vaso de vidrio azulado", stock: 10 },
  ];

export const seedProducts = () => {
    products.forEach((product) => {
      addDoc(collection(db, "products"), product);
    });
};
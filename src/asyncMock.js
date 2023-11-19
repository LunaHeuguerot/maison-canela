const products = [
    { id: "1", name: "Cesto Ropa", img: "/img/fotos-prods/cesto-ropa.webp", price: 100, category: "baño", description: "Cesto para ropa sucia", stock: 10 },
    { id: "2", name: "Cubiertos", img: "/img/fotos-prods/cubiertos.webp", price: 100, category: "cocina", description: "Set de 24 cubiertos", stock: 10 },
    { id: "3", name: "Cuchara", img: "/img/fotos-prods/cuchara.webp", price: 100, category: "cocina", description: "Cuchara cerámica", stock: 10 },
    { id: "4", name: "Mesa Hierro", img: "/img/fotos-prods/mesa-hierro.webp", price: 100, category: "muebles", description: "Mesa ratona de hierro", stock: 10 },
    { id: "5", name: "Set Baño", img: "/img/fotos-prods/set-baño.webp", price: 100, category: "baño", description: "Set 4 piezas para baño", stock: 10 },
    { id: "6", name: "Tasa", img: "/img/fotos-prods/tasa.webp", price: 100, category: "cocina", description: "Tasa de cerámica", stock: 10 },
    { id: "7", name: "Vaso Vidrio", img: "/img/fotos-prods/vaso-vidrio.webp", price: 100, category: "cocina", description: "Vaso de vidrio azulado", stock: 10 },
  ];


  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
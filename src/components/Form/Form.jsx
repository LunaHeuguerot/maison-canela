import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

export const Form = () => {
  const { addOrderDB } = useContext(FirebaseContext);
  const {cartItems, totalCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    addOrderDB(cartItems, {name, email}, totalCart);
    
    setName("");
    setEmail("");
  };

  return (
    <div onSubmit={handleForm}>
      <div>
        <p label={"Nombre"} value={name} onChange={(e) => setName(e.target.value)} />
        <p label={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" variant="contained" color="success">
          Comprar
        </button>
      </div>
    </div>
  );
};
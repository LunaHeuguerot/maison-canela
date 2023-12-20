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
    <div>
      <form onSubmit={handleForm}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
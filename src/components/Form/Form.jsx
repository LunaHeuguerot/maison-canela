import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import "./Form.css";

export const Form = ({ cartItems, totalCartItems }) => {

    const { addOrderDB } = useContext(FirebaseContext)
    const { clearCartItems, setTotalQuantity } = useContext(CartContext)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [orderInfo, setOrderInfo] = useState(null)

    const handleForm = async (e) => {
        e.preventDefault()

        if (email !== confirmEmail) {
            setEmailError("El correo de confirmación no coincide con el original")
            return
        }
        setEmailError("")

        const userData = { name, surname, phone, email }
        const orderId = await addOrderDB(cartItems, userData, total)

        setOrderInfo({
            orderId,
            items: cartItems,
            total: totalCartItems,
        })

        clearCartItems()
        setTotalQuantity(0)

        setName("")
        setSurname("")
        setPhone("")
        setEmail("")
        setConfirmEmail("")
    }

    return (
        <div className="form-container">
      <form className="p-4" onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="surname" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${emailError && 'is-invalid'}`}
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
          />
        </div>

        <label htmlFor="confirmEmail" className="form-label">
          Confirmar Email
        </label>
        <input
          type="email"
          className={`form-control ${emailError && 'is-invalid'}`}
          id="confirmEmail"
          value={confirmEmail}
          onChange={(e) => {
            setConfirmEmail(e.target.value);
            setEmailError('');
          }}
        />
        {emailError && <div className="invalid-feedback">{emailError}</div>}

        <button type="submit" className="btn btn-primary m-2 form-button">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};
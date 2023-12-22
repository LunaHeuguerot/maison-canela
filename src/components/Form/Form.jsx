import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

export const Form = () => {

    const { addOrderDB, orderId } = useContext(FirebaseContext)
    const { cartItems, totalCartItems, clearCartItems, setTotalQuantity } = useContext(CartContext)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [orderInfo, setOrderInfo] = useState({})

    const handleForm = async (e) => {
        e.preventDefault()

        if (email !== confirmEmail) {
            setEmailError("El correo de confirmación no coincide con el original")
            return
        }
        setEmailError("")

        const userData = { name, surname, phone, email }
        addOrderDB(cartItems, userData, totalCartItems)

        setOrderInfo({
            userData,
            items: cartItems,
            total: totalCartItems,
        })
    }

    return (
        <div>
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
                    className={`form-control ${emailError && "is-invalid"}`}
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError("") 
                    }}
                />
            </div>

                <label htmlFor="confirmEmail" className="form-label">
                    Confirmar Email
                </label>
                <input
                    type="email"
                    className={`form-control ${emailError && "is-invalid"}`} 
                    id="confirmEmail"
                    value={confirmEmail}
                    onChange={(e) => {
                        setConfirmEmail(e.target.value)
                        setEmailError("")
                    }}
                />
                {emailError && <div className="invalid-feedback">{emailError}</div>} 

            <button type="submit" className="btn btn-primary m-2">
                Finalizar compra
            </button>
        </form>
/*
        {orderInfo && (
                <div className="alert alert-success mt-3" role="alert" style={{ width: "40%" }}>
                    <h4 className="alert-heading">¡Compra realizada con éxito!</h4>
                    <p>Tu orden con ID número {orderId} ha sido procesada.
                    <br></br>
                    <br></br>
                    Detalles de la compra:</p>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                            </li>
                        ))}
                    </ul>
                    <b>Total de la compra: ${cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</b>
                </div>
            )}
        </div>
    )
}
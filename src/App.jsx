import { Cart, ErrorBoundary, ItemDetailContainer, ItemListContainer, NavBar, Order } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";


export const App = () => {
  return (
    <>

    <BrowserRouter>
      <ErrorBoundary>
        <FirebaseContextProvider>
          <CartContextProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/confirmar-compra" element={<Order/>} />
            </Routes>
          </CartContextProvider>
        </FirebaseContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
    </>
  )
}

import { ItemListContainer, NavBar } from "./components"

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda"} />
    </>
  )
}

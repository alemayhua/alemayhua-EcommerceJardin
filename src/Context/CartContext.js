import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addCarrito = (nuevoProducto) => {
        setCartList( [...cartList, nuevoProducto]);
    }

    const borrarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCarrito,
            borrarCarrito
        }}>
            {children}
        </CartContext.Provider >
    )

}

export default CartContextProvider;

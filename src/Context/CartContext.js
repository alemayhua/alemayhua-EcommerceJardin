import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const isInCart = (id) => cartList.findIndex(producto => producto.id === id);

    const addCarrito = (nuevoProducto) => {
        let i = isInCart(nuevoProducto.id);
        if (i === -1) {
            setCartList( [...cartList, nuevoProducto]);
        }else{
            cartList[i].cantidad += nuevoProducto.cantidad
            setCartList( [...cartList] )
        }
    }

    const borrarCarrito = () => {
        setCartList([])
    }

    const cantidadTotal = () => {
        return cartList.reduce( (count, producto) => count += producto.cantidad, 0 )
    }

    const precioTotal = () => {
        return cartList.reduce( ( sumarPrecio, producto ) => sumarPrecio += producto.price * producto.cantidad, 0 )

    }

    const eliminarItem = (id) => {
        setCartList( cartList.filter( producto => producto.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCarrito,
            borrarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider >
    )

}

export default CartContextProvider;

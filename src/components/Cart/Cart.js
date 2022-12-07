import { useCartContext } from '../../Context/CartContext'
import { Button } from "react-bootstrap"

export const Cart = () => {
  const { cartList, borrarCarrito } = useCartContext();
  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((product) =>  <li key={product.id}>
                                     <img src={product.foto} alt=''  style={{ height: '200px', width: '200px' }} />
                                      Nombre: {product.name} - Precio {product.price} - cantidad: {product.cantidad}
                                    </li>
        )}
      </ul>
      <Button variant="secondary" size="sm" onClick={borrarCarrito}>
        Vaciar Carrito
      </Button>
    </div>
  )
}

export default Cart


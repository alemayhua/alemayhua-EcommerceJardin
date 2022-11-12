import { useState } from "react"
import { Button } from "react-bootstrap"

const Contador = ({ initial, stock}) => {
    const[count, setCount] = useState(1)
    const sumarCantidad = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restarCantidad = () => {
        if(count > initial){
            setCount(count - 1)
        }
    }
  return (
    <div>
        <button onClick={restarCantidad}>-</button>
        <label>{count}</label>
        <button onClick={sumarCantidad}>+</button>
        <br /><br />
        <Button variant="secondary" size="sm">
          Agregar al carrito
        </Button>
    </div>
  )
}

export default Contador
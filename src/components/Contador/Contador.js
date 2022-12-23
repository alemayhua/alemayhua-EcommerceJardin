import { useState } from "react"
import { Button } from "react-bootstrap"

const Contador = ({ initial, stock, onAdd, handleInter }) => {
  const [count, setCount] = useState(1);

  const sumarCantidad = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const restarCantidad = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const addCantidad = () => {
    onAdd(count);
    handleInter('input');
  }

  return (
    <div>
      <center>

        <Button variant="secondary" size="sm" onClick={restarCantidad}>
          -
        </Button>
        <label style={{ margin: '20px' }}>{count}</label>
        <Button variant="secondary" size="sm" onClick={sumarCantidad}>
          +
        </Button>
        <br />
        <Button variant="secondary" size="sm" onClick={addCantidad}>
            Agregar al carrito
        </Button>
      </center>
    </div>
  )
}

export default Contador
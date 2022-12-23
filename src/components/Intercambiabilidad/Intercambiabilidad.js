import { useState } from "react";
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";
import { useCartContext } from '../../Context/CartContext';
import { Button } from "react-bootstrap";

const InputCount = () => {
    return (
        <div>
            <Link to='/cart'>
                <Button variant="secondary" size="sm" style={{margin: '5px'}}>
                    Ir al carrito
                </Button>
            </Link>
            <Link to='/'>
                <Button variant="secondary" size="sm">
                    Seguir comprando
                </Button>
            </Link>
        </div>
    )
}

const Intercambiabilidad = ({ stock, product }) => {
    const { addCarrito } = useCartContext();

    const onAdd = (cantidad) => {
        addCarrito({ ...product, cantidad })
    }

    const [inputType, setInputType] = useState('button')

    const handleInter = (cambio) => {
        setInputType(cambio)
    }

    return (
        <div>
            {
                inputType === 'button' ?
                    <Contador initial={1} stock={stock} onAdd={onAdd} handleInter={handleInter} />
                    :
                    <InputCount />
            }
        </div>

    )
}

export default Intercambiabilidad;
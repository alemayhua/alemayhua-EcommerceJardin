import Contador from '../Contador/Contador';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({ product }) => {
    const { cartList, addCarrito } = useCartContext();

    const onAdd = (cantidad) => {
        addCarrito( { ...product, cantidad } )
    }

    console.log(cartList);

    return (
        <div>
            <center>

                <div key={product.id} className='card w-25' style={{ display: 'inline-block', margin: '20px' }}>
                    <div className='card-header' >
                        {product.name}
                    </div>
                    <div className='card-body'>
                        <center>
                            <img src={product.foto} alt="" style={{ height: '200px', width: '200px' }} />
                        </center>
                    </div>
                    <div className='card-footer'>
                        precio : {product.price}
                        <br />
                        stock : {product.stock}
                    </div>
                </div>
                <Contador initial={1} stock={product.stock} onAdd={onAdd} />
            </center>

        </div>
    )
}

export default ItemDetail
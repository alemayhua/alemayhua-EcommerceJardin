import { useCartContext } from '../../Context/CartContext'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from 'react';

export const Cart = () => {
  const { cartList, borrarCarrito, precioTotal, eliminarItem } = useCartContext();
  const [b, setB] = useState(0);
  const [idCompra, setIdCompra] = useState();
  const [dataForm, setDataForm] = useState({
    nombre: '',
    email: '',
    repetirEmail: '',
    telefono: ''
  })
  const generarOrden = (evt) => {
    evt.preventDefault();
    if (document.formulario.email.value === document.formulario.repetirEmail.value) {
      let orden = {}
      orden.buyer = dataForm;
      orden.total = precioTotal();
      orden.items = cartList.map(product => ({ id: product.id, name: product.name, price: product.price }));
      const db = getFirestore();
      const queryCollection = collection(db, 'ordenes');
        addDoc(queryCollection, orden)
          .then(resp => setIdCompra(resp.id))
          .finally(() => setDataForm({
            nombre: '',
            email: '',
            repetirEmail: '',
            telefono: ''
          }),
            borrarCarrito(),
            setB(1)
          )
    } else {
      alert('ERROR: Los emails no coinciden')
      return false
    }
    //atualizar
    // const queryDoc = doc(db, 'items', 'GgbFL4U0x5DSzWLWpawN');
    // updateDoc(queryDoc, {
    //   stock: 16
    // })
    //   .finally(() => console.log('stock actualizado'))
    //   console.log(dataForm)
  }

  const handelOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    precioTotal() === 0
      ?
      <center>
        <h2 style={b === 0 ? { color: 'red' } : { color: 'green' }}>{b === 0 ? '¡¡CARRITO VACIO!!' : `¡¡MUCHAS GRACIAS POR SU COMPRA!! ID de compra: ${idCompra}`}</h2>
        <Link to='/'>
          <Button variant="secondary" size="sm">
            Ir a comprar
          </Button>
        </Link>
      </center>
      :
      <div>
        <center>
          <h1>Su Carrito</h1><hr />
        </center>
        <ul>
          {cartList.map((product) => <li key={product.id} style={{ margin: '5px' }}>
            <img src={product.foto} alt='' style={{ height: '200px', width: '200px' }} />
            Nombre: {product.name} - Precio {product.price} - cantidad: {product.cantidad}
            <Button variant="secondary" size="sm" onClick={() => eliminarItem(product.id)}>
              X
            </Button>
          </li>
          )}
        </ul>
        <center>
          <label>Precio Total: ${precioTotal()}</label>
        </center>
        <center>
          <hr />
          <form name='formulario' onSubmit={generarOrden}>
            <input type="text" name='nombre' onChange={handelOnChange} value={dataForm.nombre} placeholder='Ingrese Nombre' required /><br /><br />
            <input type="text" name='email' onChange={handelOnChange} value={dataForm.email} placeholder='Ingrese Mail' required /><br /><br />
            <input type="text" name='repetirEmail' onChange={handelOnChange} value={dataForm.repetirEmail} placeholder='Repetir Mail' required /><br /><br />
            <input type="text" name='telefono' onChange={handelOnChange} value={dataForm.telefono} placeholder='Ingrese Teléfono' required /><br /><br />
            <Button id='enviar' variant="secondary" size="sm" type='submit'>
              Generar Orden
            </Button>
          </form>
          <Button variant="secondary" size="sm" onClick={borrarCarrito} style={{ margin: '5px' }}>
            Vaciar Carrito
          </Button>
          <Link to='/'>
            <Button variant="secondary" size="sm">
              Seguir comprando
            </Button>
          </Link>
        </center>
      </div>
  )
}

export default Cart


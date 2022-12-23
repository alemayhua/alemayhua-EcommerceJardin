import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = doc(db, 'items', productId);
    getDoc(queryCollection)
      .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
      .catch(reject => console.log(reject))
      .finally(() => setLoading(false))
  }, [productId])

  // useEffect(() => {
  //   gFetch(productId)
  //     .then(resp => setProduct(resp))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false))
  // }, [productId])

  return (

    <div>
      {
        loading
          ?
          <h2>Cargando mi bro...</h2>
          :
          <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer
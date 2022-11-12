import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../utils/gFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const[product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    gFetch(productId)
    .then(resp => setProduct(resp))
  }, [productId])

  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer
import { useEffect, useState } from "react";
import { gFetch } from "../../utils/gFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() => {
        if(categoriaId){
           gFetch()
            .then(resp => setProducts(resp.filter(prod => prod.categoria === categoriaId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        }else{
            gFetch()
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        }   
    }, [categoriaId])

    return (
        loading
            ?
            <h2>Cargando bro wait...</h2>
            :
            <div>
                <center>    
                <ItemList products={products} />
                </center>
            </div>
    );
}

export default ItemListContainer;
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        if (categoriaId) {
            let queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
                .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(reject => console.log(reject))
                .finally(() => setLoading(false))
        } else {
            getDocs(queryCollection)
                .then((resp) => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(reject => console.log(reject))
                .finally(() => setLoading(false))
        }
    }, [categoriaId])

    // useEffect(() => {
    //     if(categoriaId){
    //        gFetch()
    //         .then(resp => setProducts(resp.filter(prod => prod.categoria === categoriaId)))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false)) 
    //     }else{
    //         gFetch()
    //         .then(resp => setProducts(resp))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false)) 
    //     }   
    // }, [categoriaId])
    return (
        loading
            ?
            <h2>Cargando bro wait...</h2>
            :
            <div>
                <center>
                    <h2>¡Bienvenido a Mundo Verde!</h2>
                    <ItemList products={products} />
                </center>
            </div>
    );
}

export default ItemListContainer;
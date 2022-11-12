import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
        products.map(( obj => <Item key={obj.id} obj={obj} />))
  )
}

export default ItemList;
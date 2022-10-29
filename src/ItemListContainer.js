const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{fontFamily: 'sans-serif'}}>
            <h1 style={{ color: 'green' }}>Bienvenido a: {greeting}</h1>
            <h4 style={{ color: 'red' }}>Todo para tu Jardin</h4>
        </div>)
}

export default ItemListContainer;
let obj = [
    { id: '1', name: 'Cactus cola de mono', categoria: 'plantas', stock: '10', price: '500', foto: 'https://i.ibb.co/LN6DLBB/mono.jpg' },
    { id: '2', name: 'Rosa', categoria: 'plantas', stock: '15', price: '1200', foto: 'https://i.ibb.co/nw20kCg/rosa.jpg' },
    { id: '3', name: 'Pala jardinera', categoria: 'herramientas', stock: '20', price: '800', foto: 'https://i.ibb.co/mqsvYkp/pala.jpg' },
    { id: '4', name: 'Rastrillo', categoria: 'herramientas', stock: '18', price: '1600', foto: 'https://i.ibb.co/72Z232C/rastrillo.jpg' },
    { id: '5', name: 'Tierra fertil', categoria: 'accesorios', stock: '50', price: '300', foto: 'https://i.ibb.co/f43zyWm/tierra.jpg' },
    { id: '6', name: 'Maceta', categoria: 'accesorios', stock: '30', price: '500', foto: 'https://i.ibb.co/ZMKQLjP/maceta.png' },
];

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( id ? obj.find( item => item.id === id ) : obj)
        }, 2000);
    })
}
import { Link } from 'react-router-dom';

const Item = ({ obj }) => {
    return (
        <Link to = {`/detail/${obj.id}`}>
            <div key={obj.id} className='card w-25' style={{ display: 'inline-block', margin: '20px' }}>
                <div className='card-header' >
                    {obj.name}
                </div>
                <div className='card-body'>
                    <center>
                        <img src={obj.foto} alt="" style={{height: '200px', width: '200px'}}/>
                    </center>
                </div>
                <div className='card-footer'>
                    precio : {obj.price}
                    <br />
                    stock : {obj.stock}
                </div>
            </div>
        </Link>
    )
}

export default Item
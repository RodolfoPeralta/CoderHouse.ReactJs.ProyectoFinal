import '../ItemDetail/itemDetail.css';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


// Component

const ItemDetail = ({ data }) => {

    const navigate = useNavigate();
    const [toCart, setToCart] = useState(false);

    // Functions

    function onAdd(count) {
        setToCart(true);
    }

    return (
        <div className="itemDetailContainer">
            <div className="img">
                <img src={data.img} alt={data.model} />
            </div>
            <div className="content">
                <h2>{data.brand} {data.model}</h2>
                <div>{data.description}</div>
                <h3>Precio: $ {data.price}</h3>
                <p>{data.stock} unidad/es disponible/s</p>

                <div className='buttonsContainer'>
                    <div className='buttons'>
                        {toCart ? <Link to="/cart"><button className='toCart'>Finalizar compra</button></Link> : <ItemCount className='itemCount' initial={1} stock={data.stock} onAdd={onAdd} />}
                    </div>

                    <div className='back'>
                        <button onClick={() => navigate(-1)}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
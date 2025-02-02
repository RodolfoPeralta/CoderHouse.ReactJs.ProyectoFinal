import '../ItemDetail/itemDetail.css';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


// Component

const ItemDetail = ({data}) => {

    // Navigation

    const navigate = useNavigate();

    // States

    const [toCart, setToCart] = useState(false);

    // Context
    
    const { addItem } = useCart();

    // Functions

    function onAdd(count) {
        setToCart(true);
        addItem(data, count);
    }

    return (
        <div className="itemDetailContainer">
            <div className="img">
                <img src={data.image} alt={data.model} />
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
                        <button onClick={() => navigate(-1)}>Seguir comprando</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
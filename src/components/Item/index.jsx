import { Link } from 'react-router-dom';
import '../Item/item.css';

// Component

const Item = ({ product }) => {

    return (
        <div className="itemContainer">

            <div className='img'>
                <img src={product.img} alt={product.model} />
            </div>
            <h4>
                {product.brand} {product.model}
            </h4>
            <div className='category'>
                <p>
                    {product.category}
                </p>
            </div>
            <h5>
                {product.price} $
            </h5>
            <h6>
                {product.stock} unidades en stock
            </h6>
            <div className='details'>
                <Link to={`/detalle/${product.id}`}>
                    <button>
                        Ver detalles
                    </button>
                </Link>
            </div>
        </div>


    )
}

export default Item;
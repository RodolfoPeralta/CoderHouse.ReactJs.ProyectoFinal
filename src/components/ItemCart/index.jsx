import '../ItemCart/itemCart.css';
import { useCart } from '../../context/CartContext';

const ItemCart = ({item}) => {

    const {deleteItem} = useCart();

    return(
        <div className="itemCartContainer">
            <div>
                {item.quantity} x {item.brand} {item.model} = $ {(item.price * item.quantity).toLocaleString("es-ES")}
            </div>
            <div className='delete'>
                <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div> 
        </div>
    )
}

export default ItemCart;
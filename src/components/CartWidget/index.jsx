import '../CartWidget/cartWidget.css';
import { useCart } from '../../context/CartContext';

// Component

const CartWidget = () => {

    // Context

    const { totalItems } = useCart();
  
    return(
        <div className="cartWidget">
            <i className="fa-solid fa-cart-shopping cart" style={{color: "#050303", width: "2vh"}}></i>
            {totalItems() !== 0 && <span>{totalItems() || '0'}</span>}
        </div>
    )
}

export default CartWidget;
import { useState } from 'react';
import '../CartWidget/cartWidget.css';

// Component

const CartWidget = () => {

    const [count, setCount] = useState(0);

    return(
        <div className="cartWidget">
            <i className="fa-solid fa-cart-shopping cart" style={{color: "#050303", width: "2vh"}}></i>
            <span>{count}</span>
        </div>
    )
}

export default CartWidget;
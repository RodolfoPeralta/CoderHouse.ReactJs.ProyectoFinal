import { useState } from 'react';
import './cart.css';

const Cart = () => {

    const [total, setTotal] = useState(0);
    
    return (
        <div className="cartContainer">
            <h2>Mi carrito</h2>
            <ul>
                {/*products.map((p) => <li key={p.id}>{p.brand} {p.model} {p.price}</li>)*/}
            </ul>
            <p>Total: {total}</p>
            <div className='buttons'>
                <button>
                    Ir a pagar
                </button>
            </div>
        </div>
    )
}

export default Cart;
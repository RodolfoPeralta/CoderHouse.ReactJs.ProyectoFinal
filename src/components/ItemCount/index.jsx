import {useEffect, useState} from 'react';
import './itemCount.css';

// Component

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    function decrement() {
        if(count > initial) {
            setCount(count - 1);
        }
    }

    function increment() {
        if(count < stock) {
            setCount(count + 1);
        }
    }
    return(
        <div className='itemCountContainer'>
            <button className='decrement' onClick={decrement} disabled={count <= 1}>-</button>
            <span className='count'>{count}</span>
            <button  className='increment' onClick={increment} disabled={count >= stock}>+</button>

            <button className='addToCart' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
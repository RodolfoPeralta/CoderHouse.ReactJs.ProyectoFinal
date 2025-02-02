import { useCart } from '../../context/CartContext';
import './cart.css';
import ItemCart from '../ItemCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { useUser } from '../../context/UserContext';
import { CircularIndeterminate } from '../CircularIndeterminate';

const Cart = () => {

    // Context

    const { cartList, totalPrice, clearAll } = useCart();
    const { user } = useUser();

    // States

    const [completed, setCompleted] = useState(false);
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(true);

    // Functions

    // Completes an order and saves in db
    const finishOrder = async () => {
        try {
            if (user?.isLoggedIn) {
                setCompleted(true);

                const ref = collection(db, "Orders");
                const order = {
                    buyer: {
                        name: user.name,
                        email: user.email
                    },
                    items: cartList.map((p) => ({id: p.id, title: p.model,  price: p.price, quantity: p.quantity})),
                    total: totalPrice(),
                    date: new Date().toISOString()
                }

                const docRef = await addDoc(ref, order);
                setId(docRef.id);
                clearAll();
            }
            else {
                window.alert("Debes estar registrado para finalizar una compra!");
            }
        }
        catch (error) {

        }
        finally {
            setLoading(false);
        }
    }

    // Conditional Rendering

    if (cartList.length === 0 && completed == false) {
        return (
            <div className="cartContainer">
                <p style={{ margin: "15%" }}>No hay elementos en el carrito</p>
                <div className="buttons">
                    <Link to="/categoría"><button>Ver productos</button></Link>
                </div>
            </div>
        )
    }

    if (completed) {
        return (
            <div className='cartContainer'>
                {
                    loading ?
                        <CircularIndeterminate />
                        :
                        <div style={{textAlign: "center"}}>
                            <p>Gracias por comprar con nosotros!</p> <p>El ID de tu compra es {id}</p>
                        </div>
                }
            </div>
        )
    }

    return (
        <div className="cartContainer">
            <h2>Mi carrito</h2>
            {cartList.map((p) => <ItemCart key={p.id} item={p} />)}
            <p>Total = $ {totalPrice().toLocaleString("es-ES")}</p>
            <div className="buttons">
                <button onClick={finishOrder}>
                    Terminar compra
                </button>
            </div>
        </div>
    )


}

export default Cart;
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    // Functions

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setCartList(cartList.map((i) => { return i.id === item.id ? {...i, quantity: i.quantity + quantity} : i }));
        }
        else {
            const product = {
                ...item,
                quantity: quantity
            };

            setCartList([...cartList, {...product, quantity}]);
        }
    }

    const clearAll = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        const newList = cartList.filter(i => i.id !== id);
        setCartList(newList);
    }

    const isInCart = (id) => {
        return cartList.some(i => i.id === id);
    }

    const totalPrice = () => {
        return cartList.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0);
    } 

    const totalItems = () => {
        return cartList.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, clearAll, isInCart, deleteItem, totalPrice, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

export const useCart = () => useContext(CartContext);

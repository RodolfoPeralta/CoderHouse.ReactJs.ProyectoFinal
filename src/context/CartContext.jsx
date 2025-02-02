import { createContext, useState, useContext } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    // States

    const [cartList, setCartList] = useState([]);

    // Functions

    // Adds a product to cart or update the quantity of an existing product
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

    // Cleans the shopping cart
    const clearAll = () => {
        setCartList([]);
    }

    // Deletes an item 
    const deleteItem = (id) => {
        const newList = cartList.filter(i => i.id !== id);
        setCartList(newList);
    }

    // Evaluates if a product exists in the cart
    const isInCart = (id) => {
        return cartList.some(i => i.id === id);
    }

    // Calculates the total price in a particular cart
    const totalPrice = () => {
        return cartList.reduce((accumulator, currentItem) => accumulator + (currentItem.quantity * currentItem.price), 0);
    } 

    // Calculates the total amount of products in cart
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

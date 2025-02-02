import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CartContextProvider from './context/CartContext';
import UserContextProvider from './context/UserContext';

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </UserContextProvider>
)

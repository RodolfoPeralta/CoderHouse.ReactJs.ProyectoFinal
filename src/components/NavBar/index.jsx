import { NavLink, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget"
import '../NavBar/navBar.css';

const NavBar = () => {

    const location = useLocation();

    return (
        <div className="navContainer">
            <nav>
                <NavLink to="/" className="menuItem">Inicio</NavLink>
                <NavLink to="/categoría" className="menuItem">Todos los productos</NavLink>
                <NavLink to="/categoría/eléctricas" className="menuItem">Guitarras Eléctricas</NavLink>
                <NavLink to="/categoría/acústicas" className="menuItem">Guitarras Acústicas</NavLink>
                <NavLink to="/categoría/clásicas" className="menuItem">Guitarras Clásicas</NavLink>
                <NavLink to="/nosotros" className="menuItem">Nosotros</NavLink>
                <NavLink to="/cart" className="menuItem">
                    <CartWidget />
                </NavLink>
                
                
            </nav>
        </div>
    )
}

export default NavBar;
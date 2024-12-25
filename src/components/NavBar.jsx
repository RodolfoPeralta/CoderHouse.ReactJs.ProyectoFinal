import CartWidget from "./CartWidget"
import './styles/NavBar.css';

const NavBar = () => {
    return (
        <div className="navContainer">
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>

                    <li>
                        <a href="">Productos</a>
                    </li>

                    <li>
                        <a href="">Nosotros</a>
                    </li>

                    <li>
                        <a className="cart" href="">
                            <CartWidget />
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
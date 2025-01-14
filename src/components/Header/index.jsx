import logo from '../../assets/img/logo.png';
import '../Header/header.css';

// Component

const Header = () => {

    return(
        <div className='headerContainer'>
            <h1>La Casa de las <span>Guitarras</span></h1>
            <div className="logo">
                <img src={logo} alt="Logo Casa de las Guitarras" />
            </div>
        </div>
        
    )
}

export default Header;
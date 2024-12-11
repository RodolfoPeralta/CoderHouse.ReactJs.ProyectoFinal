import logo from '../assets/img/guitar-logo.png';
import './styles/header.css';

const Header = () => {

    return(
        <div className='headerContainer'>
            <h1>La Casa de las <span style={{color: '#f5a641'}}>Guitarras</span></h1>
            <div className="logo">
                <img src={logo} alt="Logo Casa de las Guitarras" />
            </div>
        </div>
        
    )
}

export default Header;
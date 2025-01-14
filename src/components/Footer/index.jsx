import '../Footer/footer.css';
import logo from '../../assets/img/logo.png';

// Component

const Footer = () => {
    return (
        <div className='footerContainer'>
            <p>&#169; Copyright 2024 | La Casa de las Guitarras | Todos los derechos reservados.</p>
            <div>
                <div className='logo'>
                    <img src={logo} alt="Logo La casa de las guitarras" />
                </div>
                <p>
                    Coderhouse | Proyecto final React Js
                </p>
            </div>
        </div>
    )
}

export default Footer;
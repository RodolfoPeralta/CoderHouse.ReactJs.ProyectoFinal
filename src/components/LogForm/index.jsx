import '../LogForm/logForm.css';
import loginImg from '../../assets/img/login.jpg';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

const LogForm = () => {

    // Context

    const { login } = useUser();

    // States

    const [userData, setUserData] = useState({name: "", email: ""});
    const [isValidData, setIsValidData] = useState(false);

    // Functions

    function onInputChange(e) {
        const { name, value } = e.target;

        if (name === "name") {
            if(value.length === 0 || value == undefined) {
                setIsValidData(false);
            }
            else {
                setIsValidData(true);
                setUserData({...userData, [name]: value});
            }
        }
        if (name === "email") {
            if(!value.includes("@") || value.length === 0 || value == undefined) {
                setIsValidData(false);
            }
            else {
               setIsValidData(true);
               setUserData({...userData, [name]: value}); 
            }
        }
    }

    function logAsUser(e) {
        if(isValidData) {
            const newUser = {
                name: userData.name,
                email: userData.email,
                isLoggedIn: true
            }
    
            login(newUser);
        }
        else {
            e.preventDefault();
            window.alert("Debes ingresar un usuario o email válidos.");
            return;
        } 
    }

    return (
        <div className="totalContainer">

            <div className='loginImg'>
                <img src={loginImg} alt="Foto de guitarra acústica." />
            </div>

            <div className='loginContainer'>
                <h2>Registrate</h2>

                <label htmlFor="name">Nombre completo</label>
                <input id="name" name="name" type="text" onChange={onInputChange} placeholder="Ingresa tu nombre y apellido" />

                <label htmlFor="email">Correo Electrónico</label>
                <input id="email" name="email" type="email" onChange={onInputChange} placeholder="Ingresa un correo electrónico válido" />
                  
                <div className='logButtonsContainer'>
                    <Link to="/">
                        <button type="button" onClick={logAsUser}>
                            Ingresar
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default LogForm;
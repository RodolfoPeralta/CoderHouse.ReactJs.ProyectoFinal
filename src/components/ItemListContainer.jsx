import './styles/itemListContainer.css';

import lespaul from '../assets/img/les-paul.webp';
import sg from '../assets/img/sg.jpg';
import strato from '../assets/img/stratocaster.jpg';
import tele from '../assets/img/telecaster.jpg';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

// Database

const productos = [
    {
        id: 1,
        model: "Les Paul",
        brand: "Gibson",
        color: "",
        price: "",
        stock: "",
        img: lespaul
    },
    {
        id: 2,
        model: "SG",
        brand: "Gibson",
        color: "",
        price: "",
        stock: "",
        img: sg
    },
    {
        id: 3,
        model: "Stratocaster",
        brand: "Fender",
        color: "",
        price: "",
        stock: "",
        img: strato
    },
    {
        id: 3,
        model: "Telecaster",
        brand: "Fender",
        color: "",
        price: "",
        stock: "",
        img: tele
    }
]

// Functions

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })
}

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData().then(data => setProducts(data));
    });


    return(
        <div className="mainContainer">
            <h2>
                ¡Bienvenido {props.name} a nuestro catálogo de productos!
            </h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;
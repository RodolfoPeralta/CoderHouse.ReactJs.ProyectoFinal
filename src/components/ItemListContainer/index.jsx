import '../ItemListContainer/itemListContainer.css';
import productos from '../../data/data';
import ItemList from '../ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Component

const ItemListContainer = ({name}) => {

    const [products, setProducts] = useState([]);

    const { categoriaId } = useParams();

    // Functions

    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        })
    }

    useEffect(() => {
        if (categoriaId) {
            fetchData().then(data => setProducts(data.filter(product => product.category === categoriaId)));
        }
        else {
            fetchData().then(data => setProducts(data));
        }
    }, [categoriaId]);

    return (
        <div>
            <h2>
                ¡Bienvenido {name} a nuestro catálogo de productos!
            </h2>
            <div className="mainContainer">
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;
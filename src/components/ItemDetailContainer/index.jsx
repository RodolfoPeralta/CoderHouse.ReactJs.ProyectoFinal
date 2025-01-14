import ItemDetail from "../ItemDetail";
import { useEffect, useState } from 'react';
import productos from '../../data/data';
import '../ItemDetailContainer/itemDetailContainer.css';
import { useParams } from "react-router-dom";

// Component

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const {detalleId} = useParams();

    function fetchData() {
        return(new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        }));
    }

    useEffect(() => {
        fetchData().then(res => setData(res.find(product => product.id === parseInt(detalleId))));
    }, []);

    return(
        <div>
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer;
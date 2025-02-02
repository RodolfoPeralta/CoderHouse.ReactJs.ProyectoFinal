import '../ItemListContainer/itemListContainer.css';
import ItemList from '../ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { CircularIndeterminate } from '../CircularIndeterminate';


// Component

const ItemListContainer = ({ name }) => {

    // States

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Params

    const { categoriaId } = useParams();

    // Use effects

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const ref = collection(db, "Products");
    
                if (categoriaId) {
                    const q = query(ref, where("category", "==", categoriaId));
    
                    const snapshot = await getDocs(q);
    
                    setProducts(snapshot.docs.map(product => (
                        {
                            id: product.id,
                            ...product.data()
                        }
                    )));
                }
                else {
                    const snapshot = await getDocs(ref);
    
                    setProducts(snapshot.docs.map(product => (
                        {
                            id: product.id,
                            ...product.data()
                        }
                    )));
                }
            }
            catch (error) {
                
            }
            finally {
                setLoading(false);
            }
        }

        fetchProducts();

    }, [categoriaId]);

    return (
        <div>
            <h2>
                ¡Bienvenido {name} a nuestro catálogo de productos!
            </h2>
            <div className="mainContainer">
                {loading ? <CircularIndeterminate /> : <ItemList products={products} />}
            </div>

        </div>
    )
}

export default ItemListContainer;
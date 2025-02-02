import ItemDetail from "../ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { CircularIndeterminate } from "../CircularIndeterminate";


// Component

const ItemDetailContainer = () => {

    // States

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    // Params

    const { detalleId } = useParams();

    // Use effects

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const ref = doc(db, "Products", detalleId);

                const snapshot = await getDoc(ref);

                const p = {
                    id: snapshot.id,
                    ...snapshot.data()
                };
                
                setData(p);
            }
            catch (error) {

            }
            finally {
                setLoading(false);
            }
        }

        fetchProduct();

    }, [detalleId]);

    return (
        <div>
            {loading ? <CircularIndeterminate /> : <ItemDetail data={data} />}
        </div>
    )
}

export default ItemDetailContainer;
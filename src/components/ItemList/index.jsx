import '../ItemList/itemList.css';
import Item from '../Item';

// Component

const ItemList = ({products = []}) => {
    return(
        <div className='itemList'>
            {products.map(product => 
                <Item key={product.id} product={product} />
            )}
        </div>
    )

}

export default ItemList;
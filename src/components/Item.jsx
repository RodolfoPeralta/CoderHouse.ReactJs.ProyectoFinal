import './styles/item.css';

const Item = ({product}) => {
    return(
        <div className="item">
            <h3>{product.brand} {product.model}</h3>
            <div className='img'>
                <img src={product.img} alt="" />
            </div>
            <div className='buttons'>
                <button>
                    <i className="fa-solid fa-cart-shopping cart" style={{color: "#000000"}}></i>
                </button>
                <button className='infoButton'>
                    INFO
                </button>
            </div>
        </div>
    )
}

export default Item;
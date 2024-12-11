import './styles/itemListContainer.css';

const ItemListContainer = (props) => {
    return(
        <div className="mainContainer">
            <h2>
                ¡Bienvenido {props.name} a nuestro catálogo de productos!
            </h2>

        </div>
    )
}

export default ItemListContainer;
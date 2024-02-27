import {Item} from "../Item/Item"
import './ItemList.css'


export const ItemList = ({products}) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.map (product => <Item key={product.id} {...product} />)}
        </div>

    );
};
import "./ItemCount.css"
import { useState } from "react"

export const ItemCount = ({stock, initial=1}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock ){
           return setQuantity ( quantity + 1);
        };
        setQuantity(quantity)
    };

    const decrement = () => {
        if (quantity === 0 ){
           return setQuantity (0);
        }
        setQuantity ( quantity - 1);
    };

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="menos btn btn-outline-success" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="mas btn btn-outline-success" onClick={increment}>+</button>
            </div>
            <div className="agregar">
                <button className="btn btn-outline-success"> Agregar al carrito </button>
            </div>
        </div>
    )
}
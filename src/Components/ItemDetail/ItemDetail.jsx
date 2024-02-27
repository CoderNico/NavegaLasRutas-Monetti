import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.css'

export const ItemDetail = ({description, img, price, stock, name}) => {
  return (
        <div className="detail card">
            <div className="detail card-body">
                <h5 className="detail card-title">{name}</h5>
                <img className="fotito" src={img} alt="" />
                <p className="detail card-text">{description}</p>
                <p className="precio">{price}€</p>
            </div>
            <ItemCount stock={stock}/>
        </div> 
  );
};



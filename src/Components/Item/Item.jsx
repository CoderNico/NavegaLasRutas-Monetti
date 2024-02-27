import { Link } from "react-router-dom";
import './Item.css' ;


export const Item = ({id, name, img, description}) => {
  return (
          <div className="col-sm-6">
            <div className="card">
            <img src={img} class="card-img-top" alt="" />
              <div className="card-body">
                <h4 className="card-title">{name} </h4>
                <p className="card-text"> {description} </p>
                <Link to={`/item/${id}`}>
                <button className="btn btn-outline-success">Ver Más</button>
                </Link>
              </div>
              </div>
          </div>
  );
};

import { useEffect, useState } from 'react'
import {ItemCount} from "../ItemCount/ItemCount";
import { getProduct } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () =>{
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

  getProduct(id)
  .then( resp => setItem(resp))

}, [])
return (
  <>
    {item && <ItemDetail {...item}/>}
  </>
)
}


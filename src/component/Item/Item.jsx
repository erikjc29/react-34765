import React from 'react'
import "./item.css"
import Button from '../Button/Button'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
function Item(props) {

  return (
    <div className='card'>
        <div className='card-img'>
            <img className='card-img-element' src={props.img} alt={props.title} />
        </div>
        <div className='card-detail'>

            <h2 className='detail-h2'>{props.title}</h2>
            <p className='detail-p'>{props.detail}</p>
            <h4 className='detail-h4'>
                {props.offer ? <p>oferta</p> : <></>}$ {props.price}
            </h4>
    
        </div>
    <Link to={`/item/${props.id}`}>
    <Button>{`Comprar ${props.title}`}</Button>
    </Link>
        
      
    </div>
  )
}

export default Item
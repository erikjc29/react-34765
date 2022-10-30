import React from 'react'
import { useState } from 'react';
// import "./clickcount.css"
import Button from '../Button/Button';
function ItemCount({stock, onAddToCart}) {
    const [count, setCount] = useState(1);

    function onAdd(){
      if(count<stock){
        setCount( count + 1 );
      }
        
    }
    function onSub(){
        if(count>1){
            setCount( count - 1 )
        }        
    }

  return (
    <div className='itemcount-cont'>
      <div>
      <Button className='btn-op' onClick={onSub}>-</Button>
      <strong className='number'>{count}</strong>
      <Button className='btn-op' onClick={onAdd}>+</Button>
      </div>
      
      <Button onClick={()=>{onAddToCart(count)}}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount



import React from 'react'
import { useState } from 'react';
import "./clickcount.css"
function ItemCount(props) {

    const [click, setClick] = useState(1);
    function onAdd(){
      if(click<props.stock){
        setClick( click + 1 );
      }
        
    }
    function onSub(){
        if(click>1){
            setClick( click - 1 )
        }        
    }
  return (
    <div className='itemcount-cont'>
      <button className='btn-op' onClick={onSub}>-</button>
      <span className='number'>{click}</span>
      <button className='btn-op' onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount



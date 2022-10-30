import React from 'react'
import "./button.css"
function Button(props) {
  function handleClick(){
    if(props.onClick){
      props.onClick()
    }
  }
  
  return (
  <button onClick={handleClick} className='btn-buy'>
    {props.children}
    </button>
  )
}

export default Button

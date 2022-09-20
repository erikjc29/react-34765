import React from 'react'
import "./itemlistcontainer.css"
function ItemListContainer(props) {
  return (
    <main className='main-cont'>
        <h2 className='main-h2'>{props.greeting}</h2>
    </main>
      
   
  )
}

export default ItemListContainer

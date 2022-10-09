import React,{useState,useEffect} from 'react'
import "./itemdetailcontainer.css"
import {getSingleData} from "../../mockAPI/mockAPI"
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom"

function ItemDetailContainer(props) {
  const [item,setItem]=useState([]);
  
  const {itemID}= useParams()

    useEffect(()=>{
      getSingleData(itemID).then((data)=>{
      setItem(data);})}
      ,[itemID]);
  return (
    <main className='main-cont'>
    <div className='flex'>
      <ItemDetail
        key={item.id}
        title={item.title}
        img={item.img}
        price={item.price}
        detail={item.detail}
        stock={item.stock}
        expired={item.expired}
      />
    </div>
   
     </main>
      
   
  )

}

export default ItemDetailContainer
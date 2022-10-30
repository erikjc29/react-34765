import React,{useState,useEffect} from 'react'
import "./itemdetailcontainer.css"
import {getSingleData} from "../../services/firebase"
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
  const [item,setItem]=useState({});
  const [feedbackMsg,setFeedbackMsg]=useState(null)
  const {itemID}= useParams()

    useEffect(()=>{
      getSingleData(itemID).then((data)=>{
      setItem(data);})
    .catch((error)=>{setFeedbackMsg(error.message)})
    },[itemID]);

  return (
    <main className='main-cont'>
    <div className='flex'>
      { feedbackMsg !== null 
      ?
        <h4>Error {feedbackMsg}</h4>  
      :
      <ItemDetail
        item={item}
      />
      }
      
    </div>
   
     </main>
      
   
  )

}

export default ItemDetailContainer
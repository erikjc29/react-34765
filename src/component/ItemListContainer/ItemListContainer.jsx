import React,{useState,useEffect} from 'react'
import "./itemlistcontainer.css"
import {getItemsByCategory, getData} from "../../mockAPI/mockAPI"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  const [itemList,setItemList]=useState();
  const {categoryID}= useParams()

  
    
  useEffect(()=>{
    if(categoryID === undefined){
      getData().then((data)=>{
        setItemList(data);} )
    }
    else{
      getItemsByCategory(categoryID).then((data)=>{
        setItemList(data);} )
    }
   },[categoryID])

  return (
    <main className='main-cont'>
        <h2 className='main-h2'>{props.greeting}</h2>
    <div className='flex'>
      <ItemList dataList={itemList}/>
    </div>
   
  </main>
      
   
  )

}

export default ItemListContainer

import React,{useState,useEffect} from 'react'
import "./itemlistcontainer.css"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {getData,getItemsByCategory} from "../../services/firebase"

function ItemListContainer(props) {
  const [itemList,setItemList]=useState([]);
  const {categoryID}= useParams();

  useEffect(()=>{
    setItemList([]);
    if(categoryID === undefined){
      getData().then((data)=>{

        setItemList(data);
        
      });
    }
    else{
      getItemsByCategory(categoryID).then((data)=>{
        setItemList(data);
       
      } );
    }
   },[categoryID])

  return (
    <main className='main-cont'>
        <h2 className='main-h2'>{props.greeting}</h2>
    <div className='flex'>
      {
     
        itemList.length ?<ItemList dataList={itemList}/> :<Loader/>
      }
    </div>
  </main>
  )
}

export default ItemListContainer

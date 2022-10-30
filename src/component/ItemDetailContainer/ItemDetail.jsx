import React,{useState} from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
function ItemDetail({item}) {
  const [count,setCount]= useState(0)
  const {addToCart}= useContext(cartContext)

  function handleAddToCard(count){
    addToCart(item,count)
    setCount(count)
  }

  if(item.title){
    return (
      <div className="itemDetail">
        <div className="cont-item">
          <div className="item-img">
            <img className="item-img-element" src={item.img} alt={item.title} />
          </div>
          <div className="item-detail">
            <h2 className="item-detail-h2">{item.title}</h2>
            <p className="item-detail-p">{item.detail}</p>
            <p className="item-detail-p">Stock Disponible: {item.stock}</p>
            <h4 className="item-detail-h4">
              {item.offer ? <p>oferta</p> : <></>}$ {item.price}
            </h4>
            {count === 0 ? <ItemCount onAddToCart={handleAddToCard} stock={item.stock} />
             : 
             <Link to="/cart" ><Button>Ver el Carrito</Button></Link>
    }
            
          </div>
        </div>
      </div>
    );
  }
  
  else{
    return <Loader/>;
  }
  
  
}

export default ItemDetail;

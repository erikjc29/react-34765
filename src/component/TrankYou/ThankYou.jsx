import React,{useEffect,useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {getOrderData} from "../../services/firebase"
import Button from '../Button/Button'
import "./thankyou.css"

function ThankYou() {
    
    const {orderID}= useParams()
    const [order,setOrder]=useState("");
    const [feedbackMsg,setFeedbackMsg]=useState(null)
    const [cart,setCart]=useState([])
    const [infoUser,setInfoUser]=useState([])

    useEffect(()=>{
        getOrderData(orderID).then((data)=>{
        setOrder(data);
            setCart(data.cart)
            setInfoUser(data.buyerData)
        })
      .catch((error)=>{
        setFeedbackMsg(error.message)})

      },[orderID]);

      return (
        feedbackMsg?
        <div className='Cont-error-order'>
          <h1>UPS! No tenemos esa Orden</h1>
          <Link to="/"><Button>Inicio</Button></Link>
        </div>
        :
        <div className='Contenedor-ThankYou'> 
        <div className='Cont-info'>
        <h2>Gracias por tu compra</h2>
        <p className='p-info-user'>Numero de Pedido: <strong>{orderID}</strong></p>   
        <p className='p-info-user'>Nombre: <strong>{infoUser.name}</strong></p>
        <p className='p-info-user'>Email: <strong>{infoUser.email}</strong></p>
        <p className='p-info-user'>Telefono: <strong>{infoUser.phone}</strong></p>
        <p className='p-info-user'>Total: <strong>{order.total}</strong></p>
      </div>
        {cart.map((item,index)=>{
            return(
                <div key={index} className="div-items-cont">
                <img className='img-product' src={item.img} alt="img" />
                <div>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
                <p>Precio : {item.price}</p>
                <p>Cantidad: {item.count} </p>
                </div>    
                </div>
            )
        })}        
        <Link to="/"><Button>Inicio</Button></Link>
        </div>
      )
    
     
    
}

export default ThankYou
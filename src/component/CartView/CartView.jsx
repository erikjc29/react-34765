import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./cartview.css";
import UserForm from "../UserForm/UserForm";
import { Link}  from "react-router-dom";
import Button from "../Button/Button";
function CartView() {
  const {cart, removeItem, getTotalPrice} = useContext(cartContext);
  if(cart.length){
    return (
      <div className="contenedor-item-cart">
        {
        cart.length?(cart.map((Item,index)=>{
          return (<div className="cont-item-cart" key={index} >
                  <img
                    className="item-cart-img"
                    src={Item.img}
                    title={Item.title}
                    alt="Producto"/>
                  <div className="item-info-cart">
                    <h1 className="item-cart-desc">{Item.title}</h1>
                    <h4 className="item-cart-desc">
                      Precio Unitario: ${Item.price}
                    </h4>
                    <h4 className="item-cart-desc">Cantidad: {Item.count}</h4>
                    <h4 className="item-cart-desc">Precio Total: ${Item.price * Item.count}</h4>
                    <img
                      className="delete-icon"
                      title="Eliminar"
                      onClick={() => removeItem(Item.id)}
                      src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
                      alt="delete"/>
                  </div> 
                  
                </div>
                ) 
            } ))
         : <h1>no hay items</h1>
         }
         <h2 className="TotalPrecio-compra">Precio Total de la Compra: ${getTotalPrice()}</h2>
         <div>
         <UserForm cart={cart} getTotalPrice={getTotalPrice}/>
         </div>
        
         
         
      </div>
      
    );
  }
  else{
    return(
      <div className="Agrege-cont">
        <h1>Agrege Productos al Carrito</h1>
        <Link to="/"><Button>Inicio</Button></Link>
      </div>
    )
  }

}

export default CartView;

import React from "react";
import "./itemdetail.css";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
function ItemDetail(props) {
  return (
    <div className="itemDetail">
      <div className="cont-item">
        <div className="item-img">
          <img className="item-img-element" src={props.img} alt={props.title} />
        </div>
        <div className="item-detail">
          <h2 className="item-detail-h2">{props.title}</h2>
          <p className="item-detail-p">{props.detail}</p>
          <h4 className="item-detail-h4">
            {props.offer ? <p>oferta</p> : <></>}$ {props.price}
          </h4>
          <ItemCount stock={props.stock} />
          <Button>{`Comprar`}</Button>
          
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

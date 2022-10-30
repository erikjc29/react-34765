import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";

function ItemList(props) {
  return (
    <div className="flex">
      {props.dataList?.map((item, index) => {
        return (
          <Item
            key={index}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            detail={item.detail}
            stock={item.stock}
            offer={item.offer}
          />
        );
      })}
    </div>
  );
}
export default ItemList;

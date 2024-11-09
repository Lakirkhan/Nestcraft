import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
// import items from "../../mockData/items.json";
import bedItems from "../bed/items.json";
import chairItems from "../chair/items.json";
import curtainItems from "../curtain/items.json";
import sofaItems from "../sofa/items.json";
import tableItems from "../table/items.json";
import { GlobalContext } from "../../context/GlobalState";

// Merge all items into one array
const items = [...bedItems, ...chairItems, ...curtainItems, ...sofaItems, ...tableItems];


const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function ItemDetail() {
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );

  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Back</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {item.brand}
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">₹{item.price}</div>
          <div className="item-size">Size: {item.size}</div>
          
          {isAdded ? (
            <Link to="/cart">
              <button className="item-btn">
                Go to Cart
              </button>
            </Link>
          ) : (
            <button
              className="item-btn"
              onClick={() => {
                addItemToCartList(item);
                setIsAdded(true);
              }}
            >
              Add To Bag
            </button>
          )}

          <p className="item-description">
            <b>Description:</b> {item.details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

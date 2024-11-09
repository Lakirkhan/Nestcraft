// import React, { useContext, useState } from "react";
// import { GlobalContext } from "../../context/GlobalState";

// function Orders() {
//   const { orders } = useContext(GlobalContext);
//   return (
//     <div className="cart-container">
//       <h1>Orders</h1>
//       {!orders.length ? (
//         <p>No Item Added! Please order something.</p>
//       ) : (
//         <>
//           <div className="cart-list">
//             {orders.map((order) => (
//               <div className="checkout-container" key={order.orderId}>
//                 <h3>Order ID :- #ID-62Z-{order.orderId}</h3>
//                 {order.items.map((item) => (
//                   <div className="cart-item" key={item.id}>
//                     <div className="item-image">
//                       <img src={item.image} alt={"Item image"} />
//                     </div>
//                     <div className="item-price">₹{item.price}</div>
//                     <div className="item-name">{item.name}</div>
//                     <div className="item-expectedDelivery">
//                       (Expected cash on delivery 3 - 6 days)
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Orders;




import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Orders.css";

function Orders() {
  const { orders } = useContext(GlobalContext);

  return (
    <div className="cart-container">
      <h1>Orders</h1>
      {!orders.length ? (
        <p>No Item Added! Please order something.</p>
      ) : (
        <>
          <div className="cart-list">
            {orders.map((order) => (
              <div className="checkout-container" key={order.orderId}>
                <h3>Order ID :- #ID-62Z-{order.orderId}</h3>
                {order.items.map((item) => (
                  // <div className="cart-item" key={item.id}>
                  <div className="cart-item" key={item.id}>
                    <div className="item-image">
                      <img src={item.image} alt={"Item image"} />
                    </div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-quantity">
                      Quantity: {item.quantity}
                    </div>
                    <div className="item-price">
                      Price (per unit): ₹{item.price}
                    </div>
                    <div className="item-total-price">
                      Total Price: ₹{item.price * item.quantity}
                    </div>
                    <div className="item-expectedDelivery">
                      (Expected cash on delivery 3 - 6 days)
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Orders;

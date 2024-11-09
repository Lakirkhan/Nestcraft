import React from "react";
import items from "./items";
import ItemList from "../itemList/ItemList";

function Sofa() {
  return (
    <section>
        {/* console.log("sofa"); */}
      <ItemList items={items} />
    </section>
  );
}

export default Sofa;

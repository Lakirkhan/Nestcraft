import React from "react";
import items from "./items";
import ItemList from "../itemList/ItemList";

function Curtain() {
  return (
    <section>
        {/* console.log("curtain"); */}
      <ItemList items={items} />
    </section>
  );
}

export default Curtain;

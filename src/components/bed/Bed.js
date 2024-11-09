import React from "react";
import items from "./items";
import ItemList from "../itemList/ItemList";

function Bed() {
  return (
    <section>
        {/* console.log("Bed"); */}
      <ItemList items={items} />
    </section>
  );
}

export default Bed;

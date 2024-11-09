import React from "react";
import items from "./items";
import ItemList from "../itemList/ItemList";

function Chair() {
  return (
    <section>
        {/* console.log("chair"); */}
      <ItemList items={items} />
    </section>
  );
}

export default Chair;

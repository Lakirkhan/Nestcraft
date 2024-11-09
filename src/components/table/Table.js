import React from "react";
import items from "./items";
import ItemList from "../itemList/ItemList";

function Table() {
  return (
    <section>
        {/* console.log("table"); */}
      <ItemList items={items} />
    </section>
  );
}

export default Table;

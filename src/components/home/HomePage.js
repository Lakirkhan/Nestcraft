import React from "react";


import bedItems from "../bed/items.json";
import chairItems from "../chair/items.json";
import curtainItems from "../curtain/items.json";
import sofaItems from "../sofa/items.json";
import tableItems from "../table/items.json";
import { GlobalContext } from "../../context/GlobalState";


import ItemList from "../itemList/ItemList";
import Carousel from "../carousel/Carousel";
import bed from "../../assets/bed.jpg";
import chair from "../../assets/chair1.png";
import sofa from "../../assets/sofa.png";
import cartain from "../../assets/curtain.jpg";
import table from "../../assets/table.avif";

const items = [...bedItems, ...chairItems, ...curtainItems, ...sofaItems, ...tableItems];

function HomePage() {
  return (
    <section>
      <Carousel images={[bed,chair,sofa,cartain,table]} />
      <ItemList items={items} />
    </section>
  );
}

export default HomePage;

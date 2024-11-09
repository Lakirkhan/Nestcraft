import "./App.css";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import Bed from "./components/bed/Bed";
import Chair from "./components/chair/Chair";
import Curtain from "./components/curtain/Curtain";
import Sofa from "./components/sofa/Sofa";
import Table from "./components/table/Table";
// import Payment from "./components/payment/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/bed" element={<Bed />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/curtain" element={<Curtain />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/table" element={<Table />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

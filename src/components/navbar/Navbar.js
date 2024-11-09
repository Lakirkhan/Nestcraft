import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar" style={{backgroundColor:"#f0f0f0",height:70}}>
      <Link to="/">
        {/* <h2>NestCreft</h2> */}
        <img src={Logo} className="navbar-logo" />
      </Link>
      <ul className="navbar-ul">
        
          <Link to="/bed"><li>Beds</li></Link>
          <Link to="/curtain"><li>Curtains</li></Link>
          <Link to="/chair"><li>Chairs</li></Link>
          <Link to="/sofa"><li>Sofas</li></Link>
          <Link to="/table"><li>Tables</li></Link>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hi, Jainish</button>
      </ul>
    </div>
  );
};

export default Navbar;

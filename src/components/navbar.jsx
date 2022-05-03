import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop">My Shopping</span>
          <div className="cart">
            <span>
              <i class="fa-solid fa-cart-plus"></i>
            </span>
            <span>0</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

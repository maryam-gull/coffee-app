import React from "react";
import "../App";
const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="Header-container">
          <h1 className="logo">
            Coffee<span>.</span>
          </h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Reviews</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="heading">
          <h1>
            FRESH COFFEE IN <br></br>THE MORNING{" "}
          </h1>
          <p>
            Fresh Coffee in early morning gives you a <br /> taste of freshness{" "}
            <br /> Consectur?Et Veritatis Velit Nesciunt Odio
          </p>

          <button className="btn btn-1 ">Get It Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

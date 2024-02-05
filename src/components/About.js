import React from "react";
import "../App";
import Img from "./assets/img.png";

const About = () => {
  return (
    <>
      <div className="row-2">
        <h1 className="h-2">About Us</h1>
        <div className="row">
          <div className="col-sm-3">
            <div className="img">
              <img src={Img} alt="Img-1" />
              <div className="col-sm-3">
                <h1>What Makes Our Coffee Special?</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  molestias voluptatum id blanditiis
                  <br /> velit maiores rem amet minima ipsa. Laboriosam optio
                  pariatur atque
                  <br /> vitae quaerat sunt velit ut, quas harum!
                  <br />
                  <p>
                    lorem Ispum Dolor Sit Amet Consectur Adipisicing Elit Slit,{" "}
                    <br /> Consectur?Et Veritatis Velit Nesciunt Odio
                  </p>
                </p>
                <button className="btn btn-1">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

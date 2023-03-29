import React, { useState, useEffect } from "react";
import "./header.css";
import sven from "./assets/sven.png";
import { Footer, Blog, Possibility, Features, WhatDota } from "./containers";
import { Navbar, Brand, CTA } from "./components";

const Header = () => {
  const [number, setNumber] = useState(0);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((json) => setHeroes(json));
  }, [number]);
  return (
    <div className="dota__header section_padding" id="home">
      <div className="dota__header-content">
        <h1 className="gradient__text">
          Let's make our future financially independent
        </h1>

        <div className="dota__header_image">
          <img src={sven} alt="sven" data-test="yo" />{" "}
        </div>
        {/* <div className="dota__header-content__Heroes">
          {Heroes.slice(0, 3).map((product) => {
            return (
              <div classname={heroes.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img src={product.images[0]} />
              </div>
            );
          })}
        </div> */}
        <Brand />
        <WhatDota />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

        <div className="dota__header-content__heroes">
          {heroes.slice(0, 3).map((hero) => {
            return (
              <div className="dota__header-content__heroes-container">
                <img src={hero.image} />
                <div className="dota__header-content__heroes-desc">
                  <h3>{hero.name}</h3>
                  <p>{hero.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./whatDota.css";
import { Feature } from "../../components";

const WhatDota = () => {
  return (
    <div className="dota__whatDota section__margin" id="dota">
      <div className="dota__whatDota-feature">
        <Feature
          title="What is Dota Future"
          text="Nothing can stop you, because you deserve success."
        />
      </div>
      <div className="dota__whatDota-heading">
        <h1 className="gradient__text">
          Multiplication are beyond your imagination
        </h1>
      </div>
      <div className="dota__whatDota-container">
        <Feature
          title="Chatbots"
          text="Powerful bots with unique algorithms give only necessary information"
        />
        <Feature
          title="Knowledgebase"
          text="Using Valve as a source of information and opinions from pro-players to give exact prediction with high probability"
        />
        <Feature
          title="Individual predictions"
          text="We can give you 100% assurance for individual"
        />
      </div>
    </div>
  );
};

export default WhatDota;

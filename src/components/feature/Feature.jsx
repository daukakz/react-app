import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="dota__whatDota-container__feature">
      <div className="dota__whatDota-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="dota__whatDota-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export { Feature };

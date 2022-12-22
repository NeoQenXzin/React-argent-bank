import React from "react";

export default function Features(props) {
  return (
    <div className="feature-item">
      <img src={props.featuresIcon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.featuresItemTitle}</h3>
      <p>{props.featuresItemContent}</p>
    </div>
  );
}

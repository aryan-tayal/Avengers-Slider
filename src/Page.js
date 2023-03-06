import React from "react";
import "./Page.css";
import avengersLogo from "./imgs/avengers-logo.png";

const Page = ({ imgSrc, name, years, styles, alt, index, hide }) => {
  const padToOne = (n) => (n <= 9 ? `0${n}` : n);
  return (
    <div className={`Page ${hide && "hide"}`} style={styles}>
      <img src={imgSrc} alt={alt} className="Page-hero" />
      <div className="Page-top">
        <img src={avengersLogo} alt="Avengers Logo" />
        <span>{padToOne(index + 1)}</span>
      </div>
      <div className="Page-marvel-logo">MARVEL</div>
      <div className="Page-bottom">
        <span>{name()}</span>
        <span>{years()}</span>
      </div>
    </div>
  );
};

export default Page;

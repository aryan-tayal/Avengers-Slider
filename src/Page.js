import React from "react";
import "./Page.css";

const Page = ({ imgSrc, name, years, styles, alt }) => {
  return (
    <div className="Page" style={styles}>
      <img src={imgSrc} alt={alt} />
      <div id="Page-bottom">
        <span>{name()}</span>
        <span>{years()}</span>
      </div>
    </div>
  );
};

export default Page;

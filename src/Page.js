import React from "react";

const Page = ({ imgSrc, name, years }) => {
  console.log(imgSrc);
  return (
    <div className="Page">
      <img src={imgSrc} alt="Avenger" />
      <div id="Page-bottom">
        <span>{name()}</span>
        <span>{years()}</span>
      </div>
    </div>
  );
};

export default Page;

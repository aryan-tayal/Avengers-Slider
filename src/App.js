import React, { useState, useRef, useEffect } from "react";

import characters from "./helper";

import Nav from "./Nav";
import Page from "./Page";

const App = () => {
  const [pageDisplayed, setPageDisplayed] = useState(0);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 38 && pageDisplayed > 0) {
      setPageDisplayed(pageDisplayed - 1);
    } else if (keyCode === 40 && pageDisplayed < characters.length - 1) {
      setPageDisplayed(pageDisplayed + 1);
    }
  };
  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0" ref={divRef}>
      <Nav currentPage={pageDisplayed} changePage={setPageDisplayed} />
      {characters.map((c, i) => (
        <Page {...c} key={i} index={i} hide={pageDisplayed > i} />
      ))}
    </div>
  );
};

export default App;

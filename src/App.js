import React, { useState } from "react";

import characters from "./helper";

import Nav from "./Nav";
import Page from "./Page";

const App = () => {
  const [pageDisplayed, setPageDisplayed] = useState(0);
  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && pageDisplayed > 0) {
      setPageDisplayed(pageDisplayed - 1);
    } else if (e.keyCode === 40 && pageDisplayed < characters.length - 1) {
      setPageDisplayed(pageDisplayed + 1);
    }
  };
  return (
    <div className="App" onKeyDown={(e) => handleKeyDown(e)} tabIndex="0">
      <Nav currentPage={pageDisplayed} changePage={setPageDisplayed} />
      {characters.map((c, i) => (
        <Page {...c} key={i} index={i} hide={pageDisplayed > i} />
      ))}
    </div>
  );
};

export default App;

import React, { useState } from "react";

import characters from "./helper";

import Nav from "./Nav";
import Page from "./Page";

const App = () => {
  const [pageDisplayed, setPageDisplayed] = useState(0);
  return (
    <div className="App">
      <Nav currentPage={pageDisplayed} changePage={setPageDisplayed} />
      {characters.map((c, i) => (
        <Page {...c} key={i} index={i} hide={pageDisplayed > i} />
      ))}
    </div>
  );
};

export default App;

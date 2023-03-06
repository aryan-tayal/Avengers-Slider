import React from "react";

import characters from "./helper";

import Nav from "./Nav";
import Page from "./Page";

const App = () => {
  return (
    <div className="App">
      <Nav />
      {characters.map((c, i) => (
        <Page {...c} key={i + 1} index={i + 1} />
      ))}
    </div>
  );
};

export default App;

import React from "react";

import characters from "./helper";

import Page from "./Page";

const App = () => {
  return (
    <div className="App">
      {characters.map((c, i) => (
        <Page {...c} key={i} />
      ))}
    </div>
  );
};

export default App;

import React from "react";

import characters from "./helper";

import Page from "./Page";

const App = () => {
  return (
    <div className="App">
      {characters.map((c, i) => (
        <Page {...c} key={i + 1} index={i + 1} />
      ))}
    </div>
  );
};

export default App;

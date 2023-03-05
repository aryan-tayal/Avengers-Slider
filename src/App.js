import React from "react";
import Page from "./Page";

import antManImg from "./imgs/antman.png";

const App = () => {
  return (
    <div className="App">
      <Page
        name={() => (
          <>
            The
            <br />
            Antman
          </>
        )}
        years={() => (
          <>
            2015 -<br />
            Present
          </>
        )}
        imgSrc={antManImg}
      />
    </div>
  );
};

export default App;

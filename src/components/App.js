import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  let [chek, setchek] = useState(true);

  return (
    <>
      <div id="main">Do not alter the main div</div>
      <button id="click" onClick={setchek(!chek)}>
        {!chek ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : (
          ""
        )}
      </button>
    </>
  );
}

export default App;

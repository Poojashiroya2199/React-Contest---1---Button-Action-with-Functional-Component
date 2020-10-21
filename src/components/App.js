import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let para = false;
  const handleClick = () => {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  };
  return (
    <>
      <div id="main">
        {/*Do not alter the main div*/}
        <button id="click" onClick={(para = true)}>
          {para ? handleClick : ""}
        </button>
      </div>
    </>
  );
}

export default App;

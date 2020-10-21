import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
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
      <div id="main">// Do not alter the main div</div>
      <button id="click" onClick={handleClick}>
        hello
      </button>
    </>
  );
}

export default App;

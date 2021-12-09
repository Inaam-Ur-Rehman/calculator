import React, { useState } from 'react'
import './App.css';
import "./keypad.css";
import Result from "./components/Result";


const App = () => {
  const [data, setData] = useState("");

  function handleNumericButton(e) {
    console.log(e.target.value);
    setData(data + e.target.value)
  }
  function onClear() {
    setData("");
  }
  return (
    <div className="app">
      <Result data={data} />
      <div className="keypad">
        <div className="keypad__inner">
          <button onClick={(e) => { handleNumericButton(e) }} value="(">(</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="CE">CE</button>
          <button onClick={(e) => { handleNumericButton(e) }} value=")">)</button>
          <button onClick={onClear} value="C">C</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="1">1</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="2">2</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="3">3</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="+">+</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="4">4</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="5">5</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="6">6</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="-">-</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="7">7</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="8">8</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="9">9</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="x">x</button>
          <button onClick={(e) => { handleNumericButton(e) }} value=".">.</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="0">0</button>
          <button onClick={(e) => { handleNumericButton(e) }} value="="> = </button>
          <button onClick={(e) => { handleNumericButton(e) }} value="/">÷</button>
        </div>
      </div>
    </div>
  );
}

export default App;

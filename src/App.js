import React, { useState } from 'react'
import './App.css';
import "./keypad.css";
import Result from "./components/Result";


const App = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("");

  function handleNumericButton(e) {
    setResult(0);
    let val = e.target.value;
    setData(data + e.target.value);
    if (val === "+") {
      setFirstNumber(parseInt(data));
      setOperator(val);
      console.log(operator);
      setData("");
    }
    if (val === "-") {
      setFirstNumber(parseInt(data));
      setOperator(val);
      setData("");
    }
    if (val === "x") {
      setFirstNumber(parseInt(data));
      setOperator(val);
      setData("");
    }
    if (val === "÷") {
      setFirstNumber(parseInt(data));
      setOperator(val);
      setData("");
    }
    if (val === "=") {
      let op = operator;
      console.log(op);
      if (op === "+") {
        const d = firstNumber + parseInt(data);
        setResult(d);
      }
      if (op === "-") {
        const d = firstNumber - parseInt(data);
        setResult(d);
      }
      if (op === "x") {
        const d = firstNumber * parseInt(data);
        setResult(d);
      }
      if (op === "÷") {
        const d = firstNumber / parseInt(data);
        setResult(d);
      }
      setData("");


    }
  }
  function onClear() {
    setData("");
    setResult(0);
  }
  function onClickCE() {
    setData(data.slice(0, -1))
  }
  return (
    <div className="app">
      <Result data={data} result={result} />
      <div className="keypad">
        <div className="keypad__inner">
          <button onClick={(e) => { handleNumericButton(e) }} value="(">(</button>
          <button onClick={onClickCE} value="CE">CE</button>
          <button onClick={(e) => { handleNumericButton(e) }} value=")">)</button>
          <button onClick={onClear} value="C">C</button>
          <button onClick={(e) => { handleNumericButton(e) }} value={1}>1</button>
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
          <button onClick={(e) => { handleNumericButton(e) }} value="÷">÷</button>
        </div>
      </div>
    </div>
  );
}

export default App;

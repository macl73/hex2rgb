import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from "./components/Input.js";
import Output from "./components/Output.js";
import './App.css';

let inputError = false;

function App() {
const [color, setColor] = useState({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#000000"
});

function handleChange(e) {
  const value = e.target.value;
  if (!(/^#[0-9A-F]{6}$/i.test(value))) {
    setColor(color => ({...color, backgroundColor: "#ff0000"}));
    inputError = true;
  } else {
    setColor(color => ({...color, backgroundColor: value}));
    inputError = false;
  };
};

  return (
    <div className="back" style={color}>
      <form style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <Input  
        onColorChange={(evt) => handleChange(evt)}
        color={color} />
        <Output color={color} inputError={inputError} />
      </form>
    </div>
  );
};

App.propTypes = {
  color: PropTypes.object,
  inputError: PropTypes.bool,
  onColorChange: PropTypes.func
};

export default App;

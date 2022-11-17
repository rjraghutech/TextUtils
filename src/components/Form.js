import React, { useState } from "react";

export default function Form() {
  const upperCaseClick = () => {
    let uperText = text.toUpperCase();
    setText(uperText);
  }
  const lowerCaseClick = () =>{
    let lowerText = text.toLowerCase();
    setText(lowerText);
  }

  const clearClick = () => {
    let clearText = "";
    setText(clearText); 
  }
  const textChange = (e) => {
    setText(e.target.value);
  }
  const [text, setText] = useState("Enter text here...!");

  return (
    <div>
      <div class="mb-3 container">
        <h1>Enter the Text Below to Analyze</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={textChange}
        ></textarea>
        <br />
        <button className="btn btn-primary" onClick={upperCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCaseClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearClick}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary...</h1>
        <p>There are {text.split(" ").length} words and {text.length} characters in above textarea....</p>
        <p>You need {0.08 * text.split(" ").length} minutes to read the above text.</p>
        <h2>Preview of your  text....</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

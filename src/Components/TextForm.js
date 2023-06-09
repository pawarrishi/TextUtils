import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!", "success");
  };

  const handleClearText = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared !!!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const showInItalic = () => {
    if (textItalic === "normal") {
      setTextItalic("italic");
    } else {
      setTextItalic("normal");
    }
    props.showAlert(" Converted to Italic!", "success");
  };

  const [text, setText] = useState("");
  const [textItalic, setTextItalic] = useState("normal");
  // text = 'new text'; Wrong way to change the text
  // setText = ('new text'); correct way to change the text

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              fontStyle: textItalic,
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#081136",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={showInItalic}>
          Convert to Italic
        </button>

        <button className="btn btn-primary" onClick={handleClearText}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#081136" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Something In The Text Box Above"}
        </p>
      </div>
    </>
  );
}

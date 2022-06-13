import { useState, useEffect } from "react";
import { bodyTheme, headerTheme, buttonTheme } from "./themeStyles";
import "./App.css";

const startText =
  "Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.";

//TODO
//create function that selects a portion of the text based on string length and wraps it in a div.
function App() {
  const [textArray, setTextArray] = useState<string[]>(startText.split(" "));
  const [inputText, setInputText] = useState<string>("");
  const [theme, setTheme] = useState("chocolate");
  useEffect(() => console.log(inputText));

  const handleInput = (event: any) => {
    let { value } = event.target;
    setInputText(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputText.length > 0) setTextArray(inputText.split(" "));
  };

  let outputText = textArray.map((val) => {
    let n = val.length === 1 ? 1 : val.length / 2;
    let highlight = val.substring(0, n);
    let textEnd = val.substring(n);
    return (
      <>
        <span className="textBold">{highlight}</span>
        <span>{textEnd + " "}</span>
      </>
    );
  });

  const setThemeStrawberry: any = () => {
    setTheme("strawberry");
  };
  const setThemeMint: any = () => {
    setTheme("mint");
  };
  const setThemeChocolate: any = () => {
    setTheme("chocolate");
  };
  const setThemeBoba: any = () => {
    setTheme("boba");
  };

  return (
    <>
      <div className="app" style={bodyTheme(theme)}>
        <header className="appHeader" style={headerTheme(theme)}>
          <h1>
            <span>Re</span>azy
          </h1>
          <h2>
            converts text to "Bionic Reading" text using some simple javascript
          </h2>
          <div id="themeButtons">
            <p>select your flavor </p>
            <button onClick={setThemeChocolate}>Chocolate 🍫</button>
            <button onClick={setThemeMint}>Mint🍃</button>
            <button onClick={setThemeStrawberry}>Strawberry 🍓</button>
          </div>
        </header>
        <div className="wrapper">
          <p className="outputText">{outputText}</p>

          <form className="form" onSubmit={handleSubmit}>
            <textarea
              className="textArea"
              value={inputText}
              onChange={handleInput}
            />
            <button className="button" style={buttonTheme(theme)}>
              Convert Text
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

// regular expression to find all words /\W/g

import { useState, useEffect } from "react";
import "./styles/App.css";

enum THEME_NAMES {
  STRAWBERRY = "strawberry",
  CHOCOLATE = "chocolate",
  MINT = "mint",
}
const startText =
  "Space Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.";

//TODO
//create function that selects a portion of the text based on string length and wraps it in a div.
function App() {
  const [textArray, setTextArray] = useState<string[]>(
    startText.split(/(\s+)/)
  );
  const [inputText, setInputText] = useState<string>("");
  const [theme, setTheme] = useState(THEME_NAMES.CHOCOLATE);
  // useEffect(() => console.log(inputText));

  const handleInput = (event: any) => {
    let { value } = event.target;
    setInputText(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputText.length > 0) setTextArray(inputText.split(/(\s+)/));
  };

  let outputText = textArray.map((val) => {
    if (val[0] != " ") {
      let n = val.length === 1 ? 1 : val.length / 2;
      let highlight = val.substring(0, n);
      let textEnd = val.substring(n);
      return (
        <>
          <span className="textBold">{highlight}</span>
          {textEnd}
        </>
      );
    } else return val;
  });

  return (
    <div data-theme={theme} className="app theme-background ">
      <header className="header theme-component">
        <h1 className="header__title">
          <span className="header__title--highlight">Re</span>azy
        </h1>
        <h2 className="header__description">
          converts text to "Bionic Reading" text using some simple javascript
        </h2>
      </header>
      <div className="content theme-background">
        <p className="output-text">{outputText}</p>

        <form className="form" onSubmit={handleSubmit}>
          <textarea
            className="form__textArea"
            value={inputText}
            onChange={handleInput}
          />
          <button className="form__button theme-component">Convert Text</button>
        </form>
      </div>
      <div className="footer theme-component">
        <div className="theme-buttons">
          <p>select your flavor </p>
          <button onClick={() => setTheme(THEME_NAMES.CHOCOLATE)}>
            Chocolate 🍫
          </button>
          <button onClick={() => setTheme(THEME_NAMES.MINT)}>Mint🍃</button>
          <button onClick={() => setTheme(THEME_NAMES.STRAWBERRY)}>
            Strawberry 🍓
          </button>
        </div>
        <h1 className="footer__credit">by Iwan Traeger-Payne</h1>
      </div>
    </div>
  );
}

export default App;

// regular expression to find all words /\W/g

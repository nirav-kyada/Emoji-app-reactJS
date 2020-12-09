import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = require("./emojiData.json");

const textToEmojiDictionary = require("./text2emojiData.json");

// var emojiDictionary = {
//   "😊": "smiling",
//   "😍": "love",
//   "🤩": "star Struct",
//   "🤐": "zipeed face",
//   "🤪": "crazy",
//   "👼": "baby"
// };

// var textToEmojiDictionary = {
//   smiling: "😊",
//   love: "😍",
//   "star struct": "🤩",
//   "zipeed face": "🤐",
//   crazy: "🤪",
//   baby: "👼"
// };
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function txtIPHandler(event) {
    var userinput = event.target.value;
    var meaning = textToEmojiDictionary[userinput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Bellow - Inside Outtt!!</h1>
      <input
        className="emojiInput"
        placeholder="Enter Emoji here.."
        onChange={emojiHandler}
      ></input>
      <input
        className="typedInput"
        placeholder="Enter Text here.."
        onChange={txtIPHandler}
      ></input>

      <h2>Meaning is : {meaning}</h2>
      <h3>Emojis we know... </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

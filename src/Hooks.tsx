import { useState } from "react";

function Hooks() {
  const game1 = useState(true);
  const [cricket, setCricket] = useState(false);
  const [hobies, setHobies] = useState([
    "Cricket",
    "gardening",
    "Stamp Collection",
  ]);

  const handleHobies = () => {
    return hobies.map((hobie, index) => <li key={index}>{hobie}</li>);
  };
  const [input, setInput] = useState("");
  return (
    <>
      <p style={{ color: "#000000", fontSize: "35px", font: "600" }}>
        Play: {String(game1[0])}
      </p>
      <button
        onClick={() => {
          game1[1](false);
          console.log(game1);
        }}
      >
        change the game to false
      </button>

      <p style={{ color: "#000000", fontSize: "35px", font: "600" }}>
        Played Cricket: {String(cricket)}
      </p>
      <button onClick={() => setCricket(true)}>change the game to true</button>
      <h2>My hobies:</h2>
      <input
        id="userInput"
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setHobies(() => [...hobies, input])}>
        click to add new hobie to list
      </button>
      <ul>{handleHobies()}</ul>
    </>
  );
}
export default Hooks;

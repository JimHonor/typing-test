import { useState } from "react";
// import { fetchQuotes } from "./api/quotes";
// import { getRandomInt } from "./assets/js/helper";

import Result from "./components/Result";
import Typing from "./components/Typing";

// type Quote = {
//   text: string;
//   author: string;
// };

const App = () => {
  // const [quotes, setQuotes] = useState<Quote[] | []>([]);

  // const [quoteIndex, setQuoteIndex] = useState(0);

  // useEffect(() => {
  //   fetchQuotes().then((value) => {
  //     setQuotes(value);
  //     setQuoteIndex(getRandomInt(0, value.length - 1));
  //   });
  // }, []);

  const text =
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. -- Henry Ford";
  // const text = quotes[quoteIndex].text;
  const words = text.split(" ").length;

  const [wpm, setWpm] = useState("");

  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const onUserFirstType = () => {
    const newId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setIntervalId(newId);
  };

  const [isEnded, setIsEnded] = useState(false);

  const onGameEnded = () => {
    clearInterval(intervalId);
    setIsEnded(true);
    setWpm(((words / seconds) * 60).toFixed());
    setSeconds(0);
  };

  const onStartGame = () => setIsEnded(false);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        padding: "0 1rem",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isEnded ? (
        <>
          <div style={{ position: "absolute", top: "2rem", right: "2rem" }}>
            <span style={{ fontSize: "20px" }}>Time: {seconds}s</span>
          </div>
          <Typing
            text={text}
            onGameEnded={onGameEnded}
            onUserFirstType={onUserFirstType}
          />
        </>
      ) : (
        <Result wpm={wpm} onStartGame={onStartGame} />
      )}
    </div>
  );
};

export default App;

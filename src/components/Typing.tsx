import { useState } from "react";

type TypingProps = {
  text: string;
  onGameEnded: () => void;
  onUserFirstType: () => void;
};

export default function Typing(props: TypingProps) {
  const { text, onGameEnded, onUserFirstType } = props;

  const words = text.split(" ");

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const activeWord = words[activeWordIndex];

  const [inputs, setInputs] = useState("");

  const [isFirstType, setIsFirstType] = useState(true);

  // charAtInputs maybe undefined
  const charColor = (props: {
    char: string;
    charAtInputs: string;
    wordIndex: number;
    activeWordIndex: number;
  }) => {
    const { char, charAtInputs, wordIndex, activeWordIndex } = props;

    return wordIndex < activeWordIndex
      ? "green"
      : wordIndex > activeWordIndex
      ? "black"
      : !charAtInputs
      ? "black"
      : charAtInputs === char
      ? "green"
      : "red";
  };

  const onInputKeydown = (code: string) => {
    if (isFirstType) {
      setIsFirstType(false);
      onUserFirstType();
    }

    if (code === "Space" && inputs === activeWord) {
      if (activeWordIndex === words.length - 1) {
        onGameEnded();
      } else {
        setInputs("");
        setActiveWordIndex(activeWordIndex + 1);
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        maxWidth: "560px",
        height: "100%",
        padding: "2rem",
        borderRadius: "4px",
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Type the text below</h3>
      <p style={{ margin: "1rem 0" }}>
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            style={{
              margin: "2px",
              borderBottom: `${
                wordIndex === activeWordIndex ? "1px solid black" : "0px"
              }`,
            }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                style={{
                  color: `${charColor({
                    char,
                    charAtInputs: inputs[charIndex],
                    wordIndex,
                    activeWordIndex,
                  })}`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </p>
      <div>
        <input
          type="text"
          autoFocus
          style={{ width: "100%" }}
          value={inputs}
          onChange={(e) => setInputs(e.target.value.trim())}
          onKeyDown={(e) => onInputKeydown(e.code)}
        />
      </div>
    </div>
  );
}

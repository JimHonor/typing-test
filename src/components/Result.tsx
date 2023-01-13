type ResultProps = {
  wpm: string;
  onStartGame: () => void;
};

export default function Result(props: ResultProps) {
  const { wpm, onStartGame } = props;

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        maxWidth: "560px",
        height: "100%",
        padding: "2rem",
        borderRadius: "4px",
        textAlign: "center",
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      }}
    >
      <h3 style={{ margin: "2rem" }}>Your WPM is {wpm}!</h3>
      <button style={{ cursor: "pointer" }} onClick={onStartGame}>
        Play again
      </button>
    </div>
  );
}

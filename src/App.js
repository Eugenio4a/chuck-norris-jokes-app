import MainForm from "./MainForm/MainForm";
import JokeCard from "./JokeCard/JokeCard";

function App() {
  return (
    <>
      <div style={{ width: "100%", display: "flex", height: "100vh" }}>
        <div style={{ width: "70%" }}>
          <h2>Hey!</h2>
          <p>Let’s try to find a joke for you:</p>
          <MainForm />
          <JokeCard />
        </div>
        <div style={{ width: "30%", background: "#f5f5f5" }}>Favorites:</div>
      </div>
    </>
  );
}

export default App;

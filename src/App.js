import MainForm from "./components/MainForm/MainForm";
import JokeCard from "./components/JokeCard/JokeCard";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
function App() {
  const activeRadio = useSelector((state) => state.activeRadio);
  const searchJoke = useSelector((state) => state.searchJoke);
  const randomJoke = useSelector((state) => state.randomJoke);
  return (
    <>
      <div className={styles.bodyApp}>
        <div className={styles.mainJokes}>
          <h2>Hey!</h2>
          <p>Let’s try to find a joke for you:</p>
          <MainForm />
          {activeRadio !== "search" ? (
            <JokeCard randomJoke={randomJoke} />
          ) : (
            searchJoke.map((joke) => (
              <JokeCard key={joke.id} searchJoke={joke} />
            ))
          )}
        </div>
        <div className={styles.favoriteJokes}>Favorites:</div>
      </div>
    </>
  );
}

export default App;

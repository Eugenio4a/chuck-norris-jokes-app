import React, { useState } from "react";
import MainForm from "./components/MainForm/MainForm";
import JokeCard from "./components/JokeCard/JokeCard";
import Favorites from "./components/Favorites/Favorites";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import cardStyles from "./components/JokeCard/JokeCard.module.css";
import cardStylesFav from "./components/Favorites/Favorites.module.css";

function App() {
  const activeRadio = useSelector((state) => state.activeRadio);
  const searchJoke = useSelector((state) => state.searchJoke);
  const randomJoke = useSelector((state) => state.randomJoke);
  const isFavorite = useSelector((state) => state.favoriteJokes);
  const [menuActive, setMenuActive] = useState(true);
  return (
    <>
      <div className={styles.bodyApp}>
        <div className={styles.mainJokes}>
          <div className={styles.headerAppJokes}>
            <h2 className={styles.title}>Hey!</h2>
            <div
              className={
                !isFavorite.length
                  ? styles.humburgerBtn
                  : styles.humburgerBtnWithSmth
              }
              onClick={() => setMenuActive(!menuActive)}
            >
              Favorite
            </div>
          </div>
          <p className={styles.title_desr}>Let’s try to find a joke for you:</p>
          <MainForm />
          {activeRadio !== "search" ? (
            <JokeCard cardStyles={cardStyles} joke={randomJoke} />
          ) : (
            searchJoke.map((joke) => (
              <JokeCard cardStyles={cardStyles} key={joke.id} joke={joke} />
            ))
          )}
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            menuActive ? styles.favoriteJokes : styles.favoriteJokesModal
          }
        >
          <p
            onClick={() => setMenuActive(!menuActive)}
            className={styles.appFavoritesTitle}
          >
            Favorites
          </p>
          <div
            className={styles.blur}
            onClick={() => {
              setMenuActive(true);
            }}
          ></div>
          <Favorites cardStylesFav={cardStylesFav} />
        </div>
      </div>
    </>
  );
}

export default App;

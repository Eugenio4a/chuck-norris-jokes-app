import { React, useEffect } from "react";
import styles from "../MainForm/MainForm.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function MailForm() {
  const wholeState = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((categories) => {
        dispatch({ type: "getCategory", payload: categories });
      });
  }, [dispatch]);
  function getJokeBtn() {
    if (wholeState.activeRadio === "random") {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((joke) => dispatch({ type: "getRandomJoke", payload: joke }));
    }
    if (wholeState.activeRadio === "categories") {
      if (wholeState.availableCategories.includes(wholeState.chosenCategory)) {
        fetch(
          `https://api.chucknorris.io/jokes/random?category=${wholeState.chosenCategory}`
        )
          .then((response) => response.json())
          .then((joke) => dispatch({ type: "getRandomJoke", payload: joke }));
      }
    }
  }
  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="random">
          <input
            type="radio"
            name="choosejoke"
            id="random"
            onChange={() =>
              dispatch({ type: "activeRadio", payload: "random" })
            }
          ></input>
          Random
        </label>
        <label htmlFor="categories">
          <input
            type="radio"
            name="choosejoke"
            id="categories"
            onChange={() =>
              dispatch({ type: "activeRadio", payload: "categories" })
            }
          ></input>
          From categories
        </label>
        <div style={{ margin: "10px 0" }}>
          {wholeState.availableCategories.map((category) => {
            return (
              <input
                key={category}
                type="button"
                style={{
                  padding: "5px",
                  width: "20%",
                }}
                value={category}
                onClick={() =>
                  dispatch({
                    type: "chooseCategory",
                    payload: category,
                  })
                }
              ></input>
            );
          })}
        </div>
        <label htmlFor="search">
          <input
            type="radio"
            name="choosejoke"
            id="search"
            onChange={() =>
              dispatch({ type: "activeRadio", payload: "search" })
            }
          ></input>
          Search
          <br />
          <input type="text" placeholder="Free text search..."></input>
        </label>
        <button
          className={styles.getJokeBtn}
          type="button"
          onClick={() => getJokeBtn()}
        >
          Get a joke
        </button>
      </form>
    </div>
  );
}

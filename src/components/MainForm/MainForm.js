import React from "react";
import styles from "../Main/Main.module.css";
import { useDispatch } from "react-redux";
import { activeRadios, chooseCategory, inputSearchValues } from "../../store";
export default function MainForm({
  activeRadio,
  availableCategories,
  getJokeBtn,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="random">
          <input
            type="radio"
            name="choosejoke"
            id="random"
            onChange={() => dispatch(activeRadios("random"))}
          ></input>
          Random
        </label>
        <label htmlFor="categories">
          <input
            type="radio"
            name="choosejoke"
            id="categories"
            onChange={() => dispatch(activeRadios("categories"))}
          ></input>
          From categories
        </label>
        <div className={styles.btnsCategoryBox}>
          {availableCategories.map((category) => {
            return (
              <input
                key={category}
                type="button"
                className={
                  activeRadio === "categories"
                    ? styles.categoriesBtns
                    : styles.categoriesBtnsNone
                }
                value={category}
                onClick={() => dispatch(chooseCategory(category))}
              ></input>
            );
          })}
        </div>

        <label htmlFor="search">
          <input
            type="radio"
            name="choosejoke"
            id="search"
            onChange={() => dispatch(activeRadios("search"))}
          ></input>
          Search
          <br />
          <input
            type="text"
            placeholder="Free text search..."
            className={
              activeRadio === "search"
                ? styles.categoriesSearchInput
                : styles.categoriesSearchInputNone
            }
            onChange={(e) => {
              dispatch(inputSearchValues(e.target.value));
            }}
          ></input>
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

import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke, getCategory, searchJoke } from "../../store";
import MainForm from "../MainForm";
export default function Main() {
  const { activeRadio, chosenCategory, inputSearchValue, availableCategories } =
    useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((categories) => {
        dispatch(getCategory(categories));
      });
  }, [dispatch]);

  function getJokeBtn() {
    if (activeRadio === "random") {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((joke) => dispatch(getRandomJoke(joke)));
    }
    if (activeRadio === "categories") {
      if (availableCategories.includes(chosenCategory)) {
        fetch(
          `https://api.chucknorris.io/jokes/random?category=${chosenCategory}`
        )
          .then((response) => response.json())
          .then((joke) => dispatch(getRandomJoke(joke)));
      }
    }
    if (activeRadio === "search") {
      fetch(`https://api.chucknorris.io/jokes/search?query=${inputSearchValue}`)
        .then((response) => response.json())
        .then((joke) => {
          dispatch(searchJoke(joke.result.slice(0, 10)));
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div>
      <MainForm
        activeRadio={activeRadio}
        availableCategories={availableCategories}
        getJokeBtn={getJokeBtn}
      />
    </div>
  );
}

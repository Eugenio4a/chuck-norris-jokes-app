import { React } from "react";
import likeImg from "../images/Vector.png";
import textImg from "../images/Group 1.png";
import likeImgClicked from "../images/heart.png";
import styles from "../JokeCard/JokeCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favoriteJokes } from "../../store";

export default function JokeCard({ joke }) {
  const favoriteJokesArr = useSelector((state) => state.favoriteJokes);

  const dispatch = useDispatch();

  function isFavorite() {
    return favoriteJokesArr.find((jokes) => jokes.id === joke.id);
  }

  if (joke.id === undefined) {
    return <div></div>;
  }
  return (
    <>
      <section className={styles.jokeCard}>
        <div className={styles.jokeCardFavoriteImg}>
          <img
            onClick={() => {
              dispatch(favoriteJokes(joke));
            }}
            src={!isFavorite() ? `${likeImg}` : `${likeImgClicked}`}
            alt="favorite"
          ></img>
        </div>
        <div className={styles.jokeCardJoke}>
          <div className={styles.textImage}>
            <img src={textImg} alt="text of joke"></img>
          </div>
          <div>
            <span>ID:{joke.id}</span>
            <p>{joke.value}</p>
          </div>
        </div>
        <div className={styles.jokeCardFooter}>
          <span>Last update: {joke.updated_at}</span>
          {joke.categories === [] ? (
            <div></div>
          ) : (
            <div>{joke.categories[0]}</div>
          )}
        </div>
      </section>
    </>
  );
}

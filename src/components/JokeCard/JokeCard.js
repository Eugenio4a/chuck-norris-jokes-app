import { React } from "react";
import likeImg from "../images/Vector.png";
import textImg from "../images/Group 1.png";
import likeImgClicked from "../images/heart.png";
import styles from "../JokeCard/JokeCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { favoriteJokes } from "../../store";

export default function JokeCard({ joke, cardStylesFav = {}, cardStyles }) {
  const favoriteJokesArr = useSelector((state) => state.favoriteJokes);
  const dispatch = useDispatch();

  const isFavorite = Boolean(
    favoriteJokesArr.find((jokes) => jokes.id === joke.id)
  );

  function addAndDeleteFromFavorites() {
    if (!isFavorite) {
      return dispatch(favoriteJokes([...favoriteJokesArr, joke]));
    }
    return dispatch(
      favoriteJokes([
        ...favoriteJokesArr.filter((jokes) => jokes.id !== joke.id),
      ])
    );
  }
  console.log(joke.updated_at);
  function getDate() {
    let hrs = Math.floor(Date.parse(joke.updated_at) / 1000 / 3600);
    let hrsToday = Math.floor(Date.now() / 1000 / 3600);
    return hrsToday - hrs;
  }
  if (joke.id === undefined) {
    return <div></div>;
  }
  return (
    <>
      <section
        className={
          cardSize === "small" ? cardStylesFav.jokeCard : styles.jokeCard
        }
      >
        <div className={styles.jokeCardFavoriteImg}>
          <img
            onClick={() => {
              addAndDeleteFromFavorites();
            }}
            src={!isFavorite ? `${likeImg}` : `${likeImgClicked}`}
            alt="favorite"
          ></img>
        </div>
        <div className={styles.jokeCardJoke}>
          <div className={styles.textImage}>
            <img src={textImg} alt="text of joke"></img>
          </div>
          <div className={styles.jokeCardText}>
            <span className={styles.jokeCardId}>
              ID:
              <a
                href={`https://api.chucknorris.io/jokes/${joke.id}`}
                target="_blank"
                rel="noreferrer"
              >
                {joke.id}
              </a>
            </span>
            <p className={styles.jokeCardTextJoke}>{joke.value}</p>
            <div className={styles.jokeCardFooter}>
              <span className={styles.jokeCardLast_Update}>
                Last update: {getDate() + ` hours ago`}
              </span>

              <span>{joke.categories[0]}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

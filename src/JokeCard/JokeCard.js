import React from "react";
import { useSelector } from "react-redux";
import likeImg from "../images/Vector.png";
import textImg from "../images/Group 1.png";
import styles from "../JokeCard/JokeCard.module.css";

export default function JokeCard() {
  const randomJoke = useSelector((state) => state.randomJoke);

  if (randomJoke.id === undefined) {
    return <div></div>;
  }
  return (
    <>
      <section className={styles.jokeCard}>
        <div className={styles.jokeCardFavoriteImg}>
          <img src={likeImg} alt="favorite"></img>
        </div>
        <div className={styles.jokeCardJoke}>
          <div>
            <img src={textImg} alt="text of joke"></img>
          </div>
          <div>
            <span>ID:{randomJoke.id}</span>
            <p>{randomJoke.value}</p>
          </div>
        </div>
        <div className={styles.jokeCardFooter}>
          <span>Last update: {randomJoke.updated_at}</span>
          {randomJoke.categories === [] ? (
            <div></div>
          ) : (
            <div>{randomJoke.categories[0]}</div>
          )}
        </div>
      </section>
    </>
  );
}

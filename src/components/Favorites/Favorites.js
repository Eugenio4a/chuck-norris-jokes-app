import React from "react";
import JokeCard from "../JokeCard/JokeCard";
import { useDispatch, useSelector } from "react-redux";

export default function Favorites() {
  const jokesFavorite = useSelector((state) => state.favoriteJokes);

  return (
    <div>
      {jokesFavorite.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </div>
  );
}

import MainForm from './components/MainForm/MainForm';
import JokeCard from './components/JokeCard/JokeCard';
import Favorites from './components/Favorites/Favorites';
import { useSelector } from 'react-redux';
import styles from './App.module.css';

import defaultCardStyles from './JokeCard.module.css';
import moduleName from './FavJokeCard.module.css';
function App() {
  const activeRadio = useSelector((state) => state.activeRadio);
  const searchJoke = useSelector((state) => state.searchJoke);
  const randomJoke = useSelector((state) => state.randomJoke);

  return (
    <>
      <div className={styles.bodyApp}>
        <div className={styles.mainJokes}>
          <h2 className={styles.title}>Hey!</h2>
          <p className={styles.title_desr}>Let’s try to find a joke for you:</p>
          <MainForm />
          {activeRadio !== 'search' ? (
            <JokeCard cardStyles={styles} joke={randomJoke} />
          ) : (
            searchJoke.map((joke) => <JokeCard key={joke.id} joke={joke} />)
          )}
        </div>
        <div className={styles.favoriteJokes}>
          <p className={styles.appFavoritesTitle}>Favorites</p>
          <Favorites cardStylesFav={styles} />
        </div>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

import css from './Home.module.css';

function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/trending/all/day?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
      },
    };

    axios
      .request(options)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.conteiner_movie}>
        {movies &&
          movies
            ?.filter(movi => movi.title)
            .map(({ title, id, poster_path, release_date, vote_average }) => {
              const releaseDate = new Date(release_date);
              const releaseYear = Number.isNaN(releaseDate)
                ? 'Unknown'
                : releaseDate.getFullYear();
              const userScore = Math.round((Number(vote_average) * 100) / 10);
              return (
                <li className={css.item} key={id}>
                  <Link
                    className={css.itemMovie}
                    state={{ from: location }}
                    to={`/movies/${id}`}
                  >
                    <img
                      height={500}
                      width={400}
                      className={css.img}
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                    />
                    <div className={css.cartConteiner}>
                      <h2 className={css.titleMovie}>{title}</h2>
                      <p className={css.yearMovie}>{releaseYear}</p>
                      <p className={css.scoreMovie}>User Score: {userScore}%</p>
                    </div>
                  </Link>
                </li>
              );
            })}
      </ul>
    </>
  );
}
export default Home;

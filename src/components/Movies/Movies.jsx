import { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import css from './Movies.module.css';

function Movies() {
  const [searchValue, setSearchValue] = useState([]);
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const currentQuery = searchParams.get('q');
  useEffect(() => {
    if (!currentQuery) {
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=9472ead59ab5d905fc1e97a44f85f6b1&limit=10',
      params: {
        query: `${currentQuery}`,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 9472ead59ab5d905fc1e97a44f85f6b1',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSearchValue(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const hendleSabmit = e => {
    e.preventDefault();
    setSearch(true);

    if (currentQuery === '') {
      Notiflix.Notify.failure('please writing value ');
    }

    setTimeout(() => {
      setSearch(false);
    }, 500);
  };
  const updateQueryString = e => {
    setValue(e.target.value);
    if (e.currentTarget.value.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ q: e.currentTarget.value.toLowerCase() });
  };
  const movie = searchValue.results;
  return (
    <>
      <form onSubmit={hendleSabmit} className={css.form}>
        <input
          onChange={updateQueryString}
          className={css.input}
          type="text"
          value={value}
          placeholder="Search movies"
        />
        <button type="submit" className={css.button}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png"
            width="33px"
            height="33px"
            alt=""
          />
        </button>
      </form>
      <ul className={css.conteiner_movie}>
        {movie !== null &&
          movie
          
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

export default Movies;

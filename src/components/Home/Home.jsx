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
      .then( (response)=> {
        setMovies(response.data.results);
      })
      .catch( (error) =>{
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1  className={css.title}>Trending today</h1>
      <ul className={css.conteiner_movie}>
        {movies.map(({ id, title }) => {
          return (
            <li className={css.item}  key={id}>
              <Link  className={css.itemMovie}state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Home;

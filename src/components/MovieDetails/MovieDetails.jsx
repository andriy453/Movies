import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { TailSpin } from 'react-loader-spinner';

import Skeleton from './Skeleton';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const { movieid } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movies, setMovies] = useState([]);
  const [isloadind, setIsloadind] = useState(true);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieid}?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
      },
    };

    axios
      .request(options)
      .then(response => {
        setMovies(response.data);
      })
      .then(() => setIsloadind(false))
      .catch(error => {
        console.error(error);
      });
    // eslint-disable-next-line no-use-before-define
  }, [movieid]);

  const genresd = movies.genres?.map(genre => genre.name);
  const { original_title, popularity, overview, poster_path } = movies;
  return (
    <>
      {isloadind ? (
        <Skeleton />
      ) : (
        <div>
          <Link className={css.Btn} to={backLinkHref}>
            Go back
          </Link>
          <div className={css.conteiner}>
            <img
              height={600}
              width={400}
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
            />
            <div>
              <h2 className={css.title}>{original_title}</h2>
              <p className={css.score}>User score:{popularity}</p>
              <h3 className={css.overview}>Overview</h3>
              <p className={css.text}>{overview}</p>
              <h3 className={css.Genres}>Genres</h3>
              <ul className={css.list}>
                {genresd?.map(genres => {
                  return <li key={nanoid()}>{genres}</li>;
                })}
              </ul>
            </div>
          </div>
          <h4 className={css.inform}>Additional information </h4>
          <ul className={css.conteinerBtn}>
            <li>
              <Link className={css.Btn} to="cast" state={location.state}>
                cast
              </Link>
            </li>
            <li>
              <Link className={css.Btn} to="reviews" state={location.state}>
                reviews
              </Link>
            </li>
          </ul>

          <Suspense
            fallback={
              <TailSpin
                height="300"
                width="300"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{ position: "absolute",right: "50%",}}
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default MovieDetails;

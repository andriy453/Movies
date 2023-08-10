import { useState ,useEffect } from "react";
import { useParams,useLocation,useNavigate ,Link, Outlet  } from "react-router-dom";
import axios from 'axios';

import css from './MovieDetails.module.css'




function MovieDetails() {
  const {movieid} = useParams();
  const  movieidFilter = movieid.slice(1, movieid.length);
  const location = useLocation();
  let  navigate = useNavigate();
  const handleClick = () => navigate(location?.state?.from ?? '/');

  const [movies, setMovies] = useState([]);
useEffect(()=>{
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieidFilter}?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setMovies(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
     

  // eslint-disable-next-line no-use-before-define
  },[movieid, movieidFilter])



  const genresd = movies.genres;
  const genres = () => {
    if(genres){
    return  genresd?.map((genre) => genre.name)
  }} 
  console.log(genres())


  return (
    <>
            <button onClick={handleClick} >
          Go back
        </button>
        <div className={css.conteiner}> <img src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} alt="" />
        <div >
          <h2>{movies.original_title}</h2>
        <p>User score:{movies.popularity}</p>
        <h3>Overview</h3>
        <p>{movies.overview}</p>
        <h3>Genres</h3>
        {genres()?.map((f)=>{
          return <span key={f.id}>{f}</span>
        })}
        </div>
        </div>
        <ul>
          <h4>Additional information </h4>
          <li><Link to="cast">cast</Link></li>
          <li><Link to="reviews">reviews</Link></li>
        </ul>
        <Outlet />
    </>
  )
}

export default MovieDetails

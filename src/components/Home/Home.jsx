import {useEffect} from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";
import { useState } from 'react';
import css from './Home.module.css'




function Home() {

  const [movies, setMovies] = useState([])
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/trending/movie/day?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
      }
    };
    
    axios
      .request(options)
      .then(function ( response){
        setMovies(response.data.results)
      })
      .catch(function (error) {
        console.error(error);
      });
    },[])
   console.log(movies)

  return (
    <ul className={css.conteiner_movie}>{movies.map((movie) =>{
      return(
   <li  key={movie.id} > <Link  to={`/movies/:${movie.id}`}>{movie.title} </Link></li>
    
)}
)}
</ul>
  )
}
export default Home

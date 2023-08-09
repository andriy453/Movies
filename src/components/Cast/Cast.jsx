import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import  axios from 'axios'
// import css from './Cast.module.css'

function Cast() {

  const {movieid} = useParams();
  const  movieidFilter = movieid.slice(1, movieid.length);

const [Credits , setCredits] = useState({});

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieidFilter}/credits?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCredits(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  },[movieidFilter])

  return (
    <section>
      <ul>{Credits.cast?.map((cas)=>{
        return(
<li key={cas.id}><img src={`https://image.tmdb.org/t/p/w200/${cas.profile_path}`} alt="" />
   <h4>{cas.original_name}</h4>
   <p>Character:{cas.character}</p></li>
        )
      })}</ul>

    </section>

  )
}

export default Cast

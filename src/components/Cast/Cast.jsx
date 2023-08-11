import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import  axios from 'axios'

import css from './Cast.module.css'

function Cast() {

  const {movieid} = useParams();

const [Credits , setCredits] = useState({});

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
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

  },[movieid])

  return (
      <ul className={css.list}>{Credits.cast?.map((cas)=>{
        return(
      <li className={css.cart} key={cas.id}>
      <img width={200}  height={300} src={`https://image.tmdb.org/t/p/w200/${cas.profile_path}`} alt="" />
      <div className={css.conteiner}>
      <h4 className={css.actor}>Actor:{cas.original_name}</h4>
      <p>Character:{cas.character}</p>
      </div>
      </li>
        )
      })}</ul>


  )
}

export default Cast

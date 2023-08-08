import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

import css from './Reviews.module.css'

function Reviews() {
  const {movieid} = useParams();
  const  movieidFilter = movieid.slice(1, movieid.length);
  
const [reviews , setReviews] = useState({});

  useEffect(()=>{

    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieidFilter}/reviews?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  },[movieidFilter])
  return (
    <div>
    <ul>{reviews.results?.map((review)=>{
      return <li  key={review.id} className={css.Item} >
      <h4 className={css.Title}>Author:{review.author}</h4>
        <p className={css.Text}>{review.content}</p>
      </li>
    })}</ul>
    </div>
  )
}

export default Reviews

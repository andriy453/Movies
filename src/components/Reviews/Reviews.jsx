import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import css from './Reviews.module.css';

function Reviews() {
  const { movieid } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=9472ead59ab5d905fc1e97a44f85f6b1`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setReviews(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieid]);
  return reviews.length === 0 ? (
    <h3>No Reviews.</h3>
  ) : (
    <ul>
      {reviews?.map(review => {
        return (
          <li key={review.id} className={css.Item}>
            <h4 className={css.Title}>Author:{review.author}</h4>
            <p className={css.Text}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Reviews;

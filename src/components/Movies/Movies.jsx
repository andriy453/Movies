import {useState, useEffect} from 'react'
import axios from 'axios';
import Notiflix from 'notiflix';
import {Link,useLocation , useSearchParams  } from "react-router-dom";

import css from './Movies.module.css'

function Movies() {
  // const [ inputvalue ,setInputvalue] = useState('');
  const [ searchValue ,setSearchValue] = useState([]);
  const [ search ,setSearch] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const inputvalue = searchParams.get('q');
  const location = useLocation();
  useEffect(()=>{
    if(inputvalue === ' '){
      return 
    }
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=9472ead59ab5d905fc1e97a44f85f6b1',
      params: {query: `${inputvalue}`, include_adult: 'false', language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 9472ead59ab5d905fc1e97a44f85f6b1'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSearchValue(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search]);

const hendleSabmit = (e) =>{
    e.preventDefault();  
    setSearch(true);

    if( inputvalue === ''){
    Notiflix.Notify.failure('please writing value ');
 }

setTimeout(()=>{
  setSearch(false);
},500)


}
const updateQueryString = e => {
  if(e.currentTarget.value === ' '){
   return setSearchParams({})
  }
  setSearchParams({q: e.currentTarget.value.toLowerCase()})
};

 const movie =  searchValue.results;

  return (
<>
    <form  onSubmit={ hendleSabmit} className={css.form}>
    <input  
        onChange={updateQueryString}
      className= {css.input}
      // value={searchParams}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search movies"
    />
      <button type="submit" className= {css.button}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png" width="30px" height="30px" alt=""/>
    </button>
  </form>


<ul className={css.conteiner_movie}>{movie?.map((movie) =>{
  return(
<li  key={movie.id} > <Link  to={`/movies/${movie.id}`}  state={ location }>{movie.title} </Link></li>
)}
)}
</ul>
</>
  )
}

export default Movies

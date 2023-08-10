
import { Routes,Route, Link} from "react-router-dom";
import Home from './Home';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';
import Cast from './Cast';
import Movies from "./Movies";
import css from '../App.module.css'
export const App = () => {
  return (
    <div>
      <header>  
       <nav className={css.nav}>
    <Link to="/" end>
      Home
    </Link>
    <Link to="/movies">Movies</Link>
  </nav>
  </header>

<main>    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieid' element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews />} />
        </Route>
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes></main>
    </div>
  );
};


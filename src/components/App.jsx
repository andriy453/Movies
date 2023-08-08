
import { Routes,Route, Link} from "react-router-dom";
import Home from './Home/Home.jsx';
import MovieDetails from './MovieDetails/MovieDetails.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Cast from './Cast';
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

        <Route path='/movies/:movieid' element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews />} />
        </Route>
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes></main>
    </div>
  );
};


import { lazy, Suspense } from 'react';
import { Routes,Route} from "react-router-dom";
import {Link } from './App.styled'

// import css from '../App.module.css'

// const [searchParams, setSearchParams] = useSearchParams(); 
// console.log(searchParams)
const MovieDetails = lazy(() =>
import('./MovieDetails')
);
const Home = lazy(() =>
  import('./Home')
);
const Reviews = lazy(() =>
  import('./Reviews')
);
const Cast = lazy(() =>
  import('./Cast')
);
const Movies = lazy(() =>
  import('./Movies')
);




export const App = () => {
  return (
    <div>
      <header>  
       <nav >
    <Link to="/" end>Home</Link>
    <Link to="/movies">Movies</Link>
  </nav>
  </header>
<main>    
<Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieid' element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>not foutn</div>} />
      </Routes>
      </Suspense>
      </main>
    </div>
  );
};


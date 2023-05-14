import './App.css';
import MovieList from './MovieList';
import Navig from './Navig';
import AddMovie from './AddMovie';
import FilterMovies from './FilterMovies';
import moviesData from './Data';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState('')

  const [newRate, setNewRate] = useState(0)

  const add = (newMovie) =>{
      setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
      <Navig />
      <FilterMovies inputSearch= {inputSearch} setInputSearch= {setInputSearch} newRate= {newRate} setNewRate={setNewRate}/>
      <AddMovie  add= {add}/>
      <MovieList movies= {movies} inputSearch= {inputSearch} newRate= {newRate}/>
    </div>
  );
}

export default App;

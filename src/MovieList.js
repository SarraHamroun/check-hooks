import React from 'react'
import  MovieCard  from "./MovieCard";

const MovieList = ({movies, newRate, inputSearch}) => {
    if (newRate === 0 && inputSearch ==='') {
        return (
            movies.map((movie)=>{ <MovieCard movie={movie} /> })
    )
    } else {
        return(
            movies.filter((movie)=>
            movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim())
            || movie.rate===newRate).map((movie) =>
            <MovieCard movie={movie} />)
        )
    
    }
    
}

export default MovieList;
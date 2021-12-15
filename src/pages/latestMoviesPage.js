import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getLatestMovies} from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToPlayList'

const LatestMoviesPage = (props) => {
  const {data, error, isLoading, isError}  = useQuery('latest', getLatestMovies)

  if (isLoading) return <Spinner/>
  if (isError) return <h1>{error.message}</h1>
  const movie = data;
  console.log(movie)
 const backdropUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path} `



  return (
    <>
    <img alt ="Backdrop" src={backdropUrl}></img>
    <h1>{movie.original_title}</h1>
    <h2>{movie.release_date}</h2>
    <h2>Popularity: {movie.popularity}</h2>
    
    </>
    
  );
};
export default LatestMoviesPage; 
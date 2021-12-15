import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSimilarMovies} from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToPlayList'

const SimilarMoviesPage = (props) => {
  const {data, error, isLoading, isError}  = useQuery('similar', getSimilarMovies)

  if (isLoading) return <Spinner/>
  if (isError) return <h1>{error.message}</h1>
  const movies = data.results;
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <PageTemplate
      title="Similar Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
    }}
    />
  );
};
export default SimilarMoviesPage; 
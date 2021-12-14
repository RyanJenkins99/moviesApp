import React from "react";
import PageTemplate from "../components/people/templatePeopleListPage";
import { useQuery } from 'react-query';
import Spinner from '../../src/components/spinner';
import {getTrendingPeople} from '../api/tmdb-api';
import AddToPlaylistIcon from '../components/cardIcons/addToPlayList';

const TrendingPeoplePage = (props) => {
  const {data, error, isLoading, isError}  = useQuery('discover', getTrendingPeople)

  if (isLoading) return <Spinner/>
  if (isError) return <h1>{error.message}</h1>
  const people = data.results;
  console.log(people);
  const favorites = people.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const mustWatch = people.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <PageTemplate
      title="Trending People"
      movies={people}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
    }}
    />
  );
};
export default TrendingPeoplePage; 
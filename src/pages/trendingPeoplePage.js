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


  return (
    <PageTemplate
      title="Trending People"
      people={people}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
    }}
    />
  );
};
export default TrendingPeoplePage; 
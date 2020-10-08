import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Home} from './screens/containers/home';
import {Header} from './screens/components/header';
import {SuggestionList} from './videos/container/suggestion-list';
import {CategoriesList} from './videos/container/categories-list';
import API from './utils/api';
import {store} from './store';
import {Movie} from './screens/containers/movie';
import {useSelector, useDispatch} from 'react-redux';
import {Search} from './sections/components/search';

export const AppLayout = () => {
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function fetchData() {
      const [movies, categories] = await Promise.all([
        API.getSuggestion(10),
        API.getMovies(),
      ]);
      dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: movies,
      });
      dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: categories,
      });
    })();
  }, []);

  if (selectedMovie) {
    return <Movie />;
  }

  return (
    <Home>
      <Header />
      <Search />
      <CategoriesList />
      <SuggestionList />
    </Home>
  );
};

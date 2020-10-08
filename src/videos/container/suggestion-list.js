import React from 'react';
import {FlatList, Text} from 'react-native';
import {SuggestionListLayout} from '../components/suggestion-list-layout';
import {Empty} from '../components/empty';
import {VerticalSeparator} from '../components/vertical-separator';
import {Suggestion} from '../components/suggestion';
import {useSelector, useDispatch} from 'react-redux';

export const SuggestionList = () => {
  const suggestion = useSelector((store) => store.suggestion);
  const dispatch = useDispatch();

  const keyExtractor = (item) => item.id.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias ☹" />;
  const ItemSeparator = () => <VerticalSeparator />;
  const viewMovie = (item) => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      },
    });
  };
  const renderItem = ({item}) => (
    <Suggestion {...item} onpress={() => viewMovie(item)} />
  );

  return (
    <SuggestionListLayout title="Recomendado para ti">
      <FlatList
        keyExtractor={keyExtractor}
        data={suggestion}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
      />
    </SuggestionListLayout>
  );
};

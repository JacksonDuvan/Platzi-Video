import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import API from '../../utils/api';
import {useDispatch} from 'react-redux';

export const Search = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const movie = await API.searchMovie(text);
    console.log(movie);
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movie[0],
      },
    });
  };
  const handleChangeText = (e) => {
    setText(e);
  };
  return (
    <TextInput
      placeholder="Busca tu pelicula favorita"
      autoCorrect={false}
      autoCapitalize="none"
      onSubmitEditing={handleSubmit}
      onChangeText={handleChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

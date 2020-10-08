import React, {useState, useEffect} from 'react';
import {MovieLayout} from '../components/movie';
import {Player} from '../../player/containers/player';
import {Header} from '../components/header';
import {Close} from '../../sections/components/close';
import {Details} from '../../videos/components/details';
import {useDispatch, useSelector} from 'react-redux';
import {Animated} from 'react-native';

export const Movie = () => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.selectedMovie);
  const closeVideo = () => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, [opacity]);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: opacity,
      }}>
      <MovieLayout>
        <Header>
          <Close onpress={closeVideo} />
        </Header>
        <Player />
        <Details {...movie} />
      </MovieLayout>
    </Animated.View>
  );
};

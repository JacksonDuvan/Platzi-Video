import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import {Layout} from '../components/layout';
import {ControlLayout} from '../components/control-player';
import {PlayPause} from '../components/play-pause';
import {ProgressBar} from '../components/progress-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation-locker';

export const Player = () => {
  const ref = React.createRef();
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);

    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);

  const onBuffer = ({isBuffering}) => {
    setLoading(isBuffering);
  };
  const onLoad = () => {
    setLoading(false);
  };
  const playPause = () => {
    setPaused(!paused);
  };

  const handleOrientation = (orientation) => {
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
      ? (setFullscreen(true), StatusBar.setHidden(true))
      : setFullscreen(false);

    StatusBar.setHidden(false);
  };

  const onFullScreen = () => {
    fullscreen
      ? Orientation.unlockAllOrientations()
      : Orientation.lockToLandscapeLeft();
    // ref.presentFullscreenPlayer()
  };
  const setTime = (payload) => {
    let duration = payload.currentTime / 60;
    let mins = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    let currentTime = (mins + seconds * 10).toFixed(2);
    setProgress(payload.currentTime / payload.seekableDuration);
    setCurrentTime(currentTime);
  };

  return (
    <Layout
      loading={loading}
      video={
        <Video
          ref={ref}
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={styles.video}
          resizeMode="cover"
          onBuffer={onBuffer}
          onLoad={onLoad}
          paused={paused}
          onProgress={setTime}
          fullscreen={fullscreen}
          fullscreenOrientation="portrait"
        />
      }
      loader={<ActivityIndicator color="red" />}
      controls={
        <ControlLayout>
          <PlayPause onPress={playPause} paused={paused} />
          <ProgressBar progress={progress} />
          <Text style={styles.text}>{currentTime}</Text>
          <TouchableHighlight onPress={onFullScreen}>
            <Icon
              name="expand-outline"
              style={styles.expand}
              size={25}
              color="#000"
            />
          </TouchableHighlight>
        </ControlLayout>
      }
    />
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  fullscreen: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    transform: [{rotate: '90deg'}],
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  expand: {
    color: 'white',
  },
});

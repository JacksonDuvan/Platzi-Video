/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {Loading} from './src/sections/components/loading';
import {AppLayout} from './src/app';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
};

export default App;

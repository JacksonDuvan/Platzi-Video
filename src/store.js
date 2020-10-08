import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducers/video'
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
// export const store = createStore(reducer, {})
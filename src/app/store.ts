import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bookReducer } from './reducers/bookReducer';
import { userLoginReducer } from './reducers/userReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  userLogin: userLoginReducer,
  booksData: bookReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const getTokenFromStorage = localStorage.getItem('jwt')
  ? JSON.parse(localStorage.getItem('jwt')!)
  : undefined;

const initialState = {
  userLogin: {
    token: getTokenFromStorage,
  },
} as {};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

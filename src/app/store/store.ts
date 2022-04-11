import { rootReducer } from 'app/reducers';
import { createStore, applyMiddleware } from 'redux';
// import { rootSaga } from 'sagas';
import { sagaMiddleware } from 'sagas/middleware';

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

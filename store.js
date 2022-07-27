//import {createStore} from 'redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import productSaga from './saga/productsaga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const storee = createStore(
    rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(productSaga);
export default storee;
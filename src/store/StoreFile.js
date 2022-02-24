import {createStore, applyMiddleware} from 'redux' ;
import promiseMiddleware from 'redux-promise' ;
import MainReducer from '../reducer/MainReducer' ;

const Store = createStore( MainReducer , applyMiddleware(promiseMiddleware) )

export default Store;
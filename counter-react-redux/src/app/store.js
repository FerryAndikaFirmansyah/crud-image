import { createStore } from 'redux';
import counterReducer from '../redux/reducer';

export const store = createStore(counterReducer);
import { createStore } from 'redux';
import counterReducer from './reducers/reducer';

const store = createStore(counterReducer);

export default store;

export type IState = ReturnType<typeof store.getState>;
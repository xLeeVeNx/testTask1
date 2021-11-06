// Import from libs
import { combineReducers, createStore, Store } from 'redux';
import { ActionsType, formReducer } from './reducers/form-reducer';

// Main code
export type rootReducerType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
	form: formReducer
});

export const store: Store<rootReducerType, ActionsType> = createStore(rootReducer);
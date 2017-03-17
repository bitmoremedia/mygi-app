import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from './reducers';

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancer = composeEnhancers(
		applyMiddleware(thunk),
		autoRehydrate(),
	);
	const store = createStore(reducers, enhancer);
	persistStore(store, { storage: AsyncStorage });
	return store;
};

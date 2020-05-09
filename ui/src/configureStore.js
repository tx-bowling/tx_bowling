import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';
import { logger } from './middleware/logger';
import { crashReporter } from './middleware/crash-reporter';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk,
        logger,
        crashReporter,
      )
    ),
  );
}

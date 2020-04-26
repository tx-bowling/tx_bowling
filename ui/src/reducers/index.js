import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import locations from './locations';
import tournaments from './tournaments';
import addresses from './addresses';
import breadcrumbs from "./breadcrumbs";
import schedules from './schedules';
import events from './events';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    locations: locations,
    addresses: addresses,
    tournaments: tournaments,
    breadcrumbs: breadcrumbs,
    schedules: schedules,
    events: events
  });

export default createRootReducer;

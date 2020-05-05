import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';

const reducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export default reducer;

import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import {
  checkIndexAuthorization,
  checkDashboardAuthorization,
} from './lib/check-auth'
// Import all of our components
import App from './App'
import Login from './login'
import Signup from './signup'
// import Dashboard from './dashboard'
import Dashboard from './dashboard/dashboard2'
import Welcome from './welcome'
import './index.css'

// Import the index reducer and sagas
import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware()

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
)

// Begin our Index Saga
sagaMiddleware.run(IndexSagas)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute onEnter={checkIndexAuthorization(store)} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/signup" component={Signup} />
        <Route onEnter={checkDashboardAuthorization(store)} path="/Dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
)

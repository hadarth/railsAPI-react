import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// redux, react-router, redux-form, saga, and material-ui
// form the 'kernel' on which react-admin runs
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import AppBar from './layout/MuAppBar';
import AppBar from './layout/MiniDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// prebuilt react-admin features
import {
    adminReducer,
    i18nReducer,
    adminSaga,
    TranslationProvider,
} from 'react-admin';
// import restProvider from 'ra-data-simple-rest';
import dataProvider from './dataProvider';
import defaultMessages from 'ra-language-english';

// your app components
import Dashboard from './components/Dashboard';
// import { PostList, PostCreate, PostEdit, PostShow } from './Post';
// import { CommentList, CommentEdit, CommentCreate } from './Comment';
// import { UserList, UserEdit, UserCreate } from './User';
// your app labels
import messages from './utils/i18n/hebrew';
import i18nProvider from './i18nProvider';


// create a Redux app
const reducer = combineReducers({
    admin: adminReducer,
    i18n: i18nReducer('en', messages),
    form: formReducer,
    routing: routerReducer,
});
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const store = createStore(reducer, undefined, compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

// side effects
// const dataProvider = restProvider('http://path.to.my.api/');
const authProvider = () => Promise.resolve();

// const i18nProvider = locale => {
//     if (locale !== 'en') {
//         return messages[locale];
//     }
//     return defaultMessages;
// };
sagaMiddleware.run(adminSaga(dataProvider, authProvider, i18nProvider));

// bootstrap redux and the routes
const App = () => (
    <Provider store={store}>
        <TranslationProvider>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                My admin
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />

                    </Switch>
                </MuiThemeProvider>
            </ConnectedRouter>
        </TranslationProvider>
    </Provider>
);

export default App;
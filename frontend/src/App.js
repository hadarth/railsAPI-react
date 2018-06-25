// import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from './dataProvider';
import authProvider from './authentication/authProvider';

import Login from './authentication/Login';
import LogoutButton from './authentication/Logout';

// import { Layout } from './layout/Layout';
// import Menu from './layout/MenuAppBar';
import Dashboard from './components/Dashboard';
import { EventList, EventShowTabbed, EventCreateSimple, EventEditSimple } from './components/events/events';

import { createMuiTheme } from '@material-ui/core/styles';

import i18nProvider from './i18nProvider';

const theme = createMuiTheme({
  direction: 'ltr',
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

const titleString = "eventech.io " + (localStorage.getItem('et-user') || "guest");

const App = () => (
  <Admin
    title={titleString}
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={Login}
    logoutButton={LogoutButton}
    dashboard={Dashboard}
    theme={theme}
    i18nProvider={i18nProvider}
    locale="he"
  >
      <Resource name="events" list={EventList} show={EventShowTabbed} create={EventCreateSimple} edit={EventEditSimple}/>
      <Resource name="users" />
      <Resource name="managers"/>
      <Resource name="promoters" />
  </Admin>
);

export default App;
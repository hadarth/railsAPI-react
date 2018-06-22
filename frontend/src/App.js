import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from './dataProvider';
import authProvider from './authProvider';

import Login from './login';

import { EventList, PostShowTabbed } from './events';
import { UserList } from './users';
import { ManagerList } from './managers';
// import { PromoterList } from './promoters';


import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'ltr',
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

const titleStr = "eventech.io " + localStorage.getItem('et-user');

const App = () => (
  <Admin
    title={titleStr}
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={Login}
    theme={theme}
  >
      <Resource name="users" />
      <Resource name="events" list={EventList} show={PostShowTabbed} create={PostShowTabbed} edit={PostShowTabbed}/>
      <Resource name="managers"/>
      <Resource name="promoters" />
  </Admin>
);

export default App;
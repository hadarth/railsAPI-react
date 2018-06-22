import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from './dataProvider';
import authProvider from './authProvider';

import Login from './login';

import { EventList, EventShow } from './events';
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


const App = () => (
  <Admin
    title="eventec.io"
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={Login}
    theme={theme}
  >
      <Resource name="users" list={UserList} />
      <Resource name="events" list={EventList} show={EventShow} create={EventShow} edit={EventShow}/>
      <Resource name="managers" list={ManagerList} />
  </Admin>
);

export default App;
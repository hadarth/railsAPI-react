import React from 'react';
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

import dataProvider from './dataProvider';
import authProvider from './authProvider';

import Login from './login';

import { PostList } from './posts';
import { EventList } from './events';
import { UserList } from './users';
import { ManagerList } from './managers';
// import { PromoterList } from './promoters';

const App = () => (
    <Admin
      title="eventec.io"
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={Login}
    >
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} />
        <Resource name="events" list={EventList} />
        <Resource name="managers" list={ManagerList} />
    </Admin>
);

export default App;
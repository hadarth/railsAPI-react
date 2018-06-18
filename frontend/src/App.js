import React from 'react';
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

import dataProvider from './dataProvider';

import { PostList } from './posts';
import { EventList } from './events';
import { UserList } from './users';

const App = () => (
    <Admin title="eventec.io" dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} />
        <Resource name="events" list={EventList} />
    </Admin>
);

export default App;
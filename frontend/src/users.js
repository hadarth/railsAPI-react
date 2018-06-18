import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const UserList = (props) => {
    debugger
    return (<List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="official_id" />
            <TextField source="age" />
            <TextField source="ticket_token" />
            <TextField source="role" />
            <TextField source="phone" />
            <TextField source="fb_profile_url" />
            <TextField source="email" />
        </Datagrid>
    </List>)
};
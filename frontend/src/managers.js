import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ManagerList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="user_id" />
        <TextField source="event_id" />
      </Datagrid>
    </List>
  )
};


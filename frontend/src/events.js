import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="type" />
        <TextField source="state" />
        <TextField source="city" />
        <TextField source="street" />
        <TextField source="street_num" />
        <TextField source="start_date_time" />
        <TextField source="end_date_time" />
        <TextField source="age_limit" />
        <TextField source="privacy" />
        <TextField source="croud_selection" />
        <TextField source="body_heb" />
        <TextField source="body_eng" />
        <TextField source="allow_unauth" />
        <TextField source="owner_id" />
        <TextField source="event_password" />
      </Datagrid>
    </List>
  )
};


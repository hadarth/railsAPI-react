import React from 'react';
import Button from '@material-ui/core/Button';
import { List, Datagrid, TextField, CardActions, CreateButton, RefreshButton  } from 'react-admin';
import { Show, SimpleShowLayout, DateField, EditButton, RichTextField } from 'react-admin';
import EventLinkField from './eventsLinkField'

export const EventList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <EventLinkField />
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
        <EditButton />
      </Datagrid>
    </List>
  )
};

export const EventShow = (props) => {
  return(
    <Show title={<EventTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="type" />
        <TextField source="state" />
        <TextField source="city" />
        <TextField source="street" />
        <TextField source="street_num" />
        <DateField source="start_date_time" />
        <DateField source="end_date_time" />
        <TextField source="age_limit" />
        <TextField source="privacy" />
        <TextField source="croud_selection" />
        <RichTextField source="body_heb" />
        <RichTextField source="body_eng" />
        <TextField source="allow_unauth" />
        <TextField source="owner_id" />
        <TextField source="event_password" />
      </SimpleShowLayout>
    </Show>
  )
};

const EventTitle = ({ record }) => {
  return <span>Event {record ? `"${record.title}"` : ''}</span>;
};


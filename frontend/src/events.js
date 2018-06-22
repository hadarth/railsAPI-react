import React from 'react';
import Button from '@material-ui/core/Button';
import { List, Datagrid, TextField, CardActions, CreateButton, RefreshButton  } from 'react-admin';
import { Show, SimpleShowLayout, DateField, EditButton, RichTextField } from 'react-admin';
import { NumberField, BooleanField, ReferenceManyField } from 'react-admin';
import EventLinkField from './eventsLinkField'


import { TabbedShowLayout, Tab } from 'react-admin'


export const EventList = (props) => {
  return (
    <List title="My Events" {...props}>
      <Datagrid>
        <EventLinkField />
        <TextField source="type" />
        <TextField source="start_date_time" />
        <TextField source="end_date_time" />
        <TextField source="body_eng" />
        <TextField source="owner_id" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

export const EventShowSimple = (props) => {
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

export const PostShowTabbed = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField label="Id" source="id" />
        <TextField label="Event Owner" source="owner_id" />
        <TextField source="title" />
        <TextField label="Event type" source="type" />
        <TextField source="url" />
        <DateField source="start_date_time" />
        <DateField source="end_date_time" />
      </Tab>
      <Tab label="body">
        <RichTextField source="body_eng" addLabel={false} />
      </Tab>
      <Tab label="Miscellaneous">
        <TextField label="Password (if protected event)" source="event_password" type="password" />
        <NumberField label="Age Limit" source="age_limit" />
        <BooleanField label="Crowd Selection" source="croud_selection" />
        <BooleanField label="Privacy" source="privacy" />
        <TextField label="allow_unauth" source="allow_unauth" />
        <RichTextField label="Hebrew" source="body_heb" />
      </Tab>
      <Tab label="Event Location">
        <TextField source="state" />
        <TextField source="city" />
        <TextField source="street" />
        <TextField source="street_num" />
      </Tab>
      <Tab label="Managers">
        <ReferenceManyField reference="managers" target="event_id" addLabel={false}>
          <Datagrid>
            <TextField source="user_id" />
            <TextField source="event_id" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

const EventTitle = ({ record }) => {
  return <span>Event {record ? `"${record.title}"` : ''}</span>;
};


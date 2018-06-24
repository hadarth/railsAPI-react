import React from 'react';
// import Button from '@material-ui/core/Button';
import RichTextInput from 'ra-input-rich-text';
import EventLinkField from './eventsLinkField'

import { List,
        Datagrid,
        // CardActions,
        // CreateButton,
        EditButton,
        Show,
        Create,
        Edit,
        SimpleForm,
        SimpleShowLayout,
        DateField,
        RichTextField,
        TextField,
        NumberField,
        BooleanField,
        ReferenceManyField,
        // DisabledInput,
        TextInput,
        DateInput,
        // LongTextInput
      } from 'react-admin';

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

export const EventShowTabbed = (props) => (
  <Show title={<EventTitle />} {...props}>
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
      <Tab label="Event Staff">
        <TabbedShowLayout>
          <Tab label="Managers">
            <ReferenceManyField reference="managers" target="event_id" addLabel={false}>
              <Datagrid>
                <TextField source="first_name" />
                <TextField source="last_name" />
                <EditButton />
              </Datagrid>
            </ReferenceManyField>
          </Tab>
          <Tab label="Promoters">
            <ReferenceManyField reference="promoters" target="event_id" addLabel={false}>
              <Datagrid>
                <TextField source="first_name" />
                <TextField source="last_name" />
                <EditButton />
              </Datagrid>
            </ReferenceManyField>
          </Tab>
        </TabbedShowLayout>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

const EventTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>;
};


export const EventCreateSimple = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="title" source="title" />
            <TextInput label="url" source="url" />
            <TextInput label="state" source="state" />
            <TextInput label="city" source="city" />
            <TextInput label="street" source="street" />
            <TextInput label="street_num" source="street_num" />
            <DateInput label="Event start time" source="start_date_time" defaultValue={new Date()} />
            <DateInput label="Event end time" source="end_date_time" defaultValue={new Date()} />
            <TextInput label="age limit" source="age_limit" />
            <TextInput label="croud selection" source="croud_selection" />
            <RichTextInput label="Hebrew" source="body_heb" />
            <RichTextInput label="English" source="body_eng" />
            <TextInput label="event password" source="event_password" />
        </SimpleForm>
    </Create>
);

export const EventEditSimple = (props) => (
    <Edit title={<EventTitle />} {...props}>
        <SimpleForm>
            <TextInput label="title" source="title" />
            <TextInput label="url" source="url" />
            <TextInput label="state" source="state" />
            <TextInput label="city" source="city" />
            <TextInput label="street" source="street" />
            <TextInput label="street_num" source="street_num" />
            <DateInput label="Event start time" source="start_date_time" defaultValue={new Date()} />
            <DateInput label="Event end time" source="end_date_time" defaultValue={new Date()} />
            <TextInput label="age limit" source="age_limit" />
            <TextInput label="croud selection" source="croud_selection" />
            <RichTextInput label="Hebrew" source="body_heb" />
            <RichTextInput label="English" source="body_eng" />
            <TextInput label="event password" source="event_password" />
        </SimpleForm>
    </Edit>
);
import React from 'react';
import { Link } from 'react-admin';

const EventLinkField = props => (
    <Link to={`/events/${props.record.id}`}>
        {props.record.title}
    </Link>
);

EventLinkField.defaultProps = {
    source: 'event_id',
    addLabel: true,
};

export default EventLinkField;

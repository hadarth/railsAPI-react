import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { EVENTS_REQUESTING } from './constants'
import eventsRequest from './actions'

import Card from '../components/simpleMediaCard'
import Grid from '@material-ui/core/Grid';

import { NavLink } from "react-router-dom";

class Events extends Component {
  componentDidMount() {
    this.props.eventsRequest()
  }

  render() {
    console.log('events.events:  ', this.props.events.events)
    console.log('events:  ', this.props.events)

    if (!this.props.events.events) {
      return <div>loading...</div>
    }
    if (this.props.events.successful && this.props.events.events.length == 0) {
      return <div>no events</div>
    }
    return (
      <Grid container  justify="center" spacing={16}>
        {this.props.events.events.map(event => (
          <Grid key={event.id} item>
            <NavLink to={'/app/myevents/' + event.id} className='foo' key={event.id}>
              <Card title={event.title} />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    );
  }
}

Events.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    eventsRequest: () => {
      dispatch(eventsRequest())
    }
  }
};

Events = connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);

export default Events;

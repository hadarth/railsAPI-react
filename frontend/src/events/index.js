import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { EVENTS_REQUESTING } from './constants'
import eventsRequest from './actions'

import Card from '../components/simpleMediaCard'
import Grid from '@material-ui/core/Grid';

class Events extends Component {
  componentDidMount() {
    this.props.eventsRequest()
  }

  render() {
    console.log('events:  ', this.props.events.events)

    if (this.props.events.events.length < 1)  {
      return <div>loading...</div>
    }
    return (
        <Grid item xs={12}>
          <Grid container  justify="center" spacing={16}>
            {this.props.events.events.map(event => (
              <Grid key={event.id} item>
                <Card title={event.title}/>
              </Grid>
            ))}
          </Grid>
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

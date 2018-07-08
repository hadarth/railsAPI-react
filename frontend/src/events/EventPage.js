import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class EventPage extends Component {
  componentDidMount() { }
  componentDidUpdate(prevProps) {}

  render() {
    console.log('props: ', this.props)
    return (
      <div>Hello Event</div>
    );
  }
}

EventPage.propTypes = {

};

const mapStateToProps = () => {
  return  {}
};

const mapDispatchToProps = () => {
  return  {}
};

EventPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPage);

export default EventPage;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { unsetUser } from '../current_user/actions'

class Dashboard extends Component {

  componentDidMount() { }
  componentDidUpdate(prevProps) {}

  handleLogoutClick() {
    this.props.unsetUser()
  }

  render() {
    return (
      <div>
        <div>Dashboard!</div>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

const mapStateToProps = () => ({});


Dashboard = connect(
  mapStateToProps,
  { unsetUser }
)(Dashboard);

export default Dashboard;

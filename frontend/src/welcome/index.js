import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

class Welcome extends Component {

  handleClick() {
    browserHistory.push('/login')
  }

  render() {
    return (
      <div>
        <div>Welcome Page</div>
        <button onClick={() => this.handleClick()}>login</button>
      </div>
    );
  }
}

const mapStateToProps = () => {
 return {}
};

const mapDispatchToProps = () => {
  return {}
};

Welcome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

export default Welcome;

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {

  handleClick() {
    this.props.history.push('/login')
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

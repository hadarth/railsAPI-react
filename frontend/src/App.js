import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'

import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard/dashboard2'
import Welcome from './welcome'

import { Route } from "react-router-dom";

class App extends Component {

  componentWillMount() {
    const storedToken = localStorage.getItem('token')
    const storedEmail = localStorage.getItem('email')
    if (!storedToken || !storedEmail) {
      this.props.history.push('/welcome')
    }
    else {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

const mapStateToProps = () => {
 return {}
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;

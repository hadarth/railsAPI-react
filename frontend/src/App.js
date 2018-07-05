import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'

import AppLayout from './layout/AppLayout'
import Welcome from './welcome'
import Login from './login'
import Signup from './signup'
import { Route, Switch } from "react-router-dom";
import Dashboard from './dashboard'

class App extends Component {

  componentWillMount() {
    const storedToken = localStorage.getItem('token')
    const storedEmail = localStorage.getItem('email')
    if (!storedToken || !storedEmail) {
      this.props.history.push('/welcome')
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/app" component={AppLayout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = () => {
 return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;

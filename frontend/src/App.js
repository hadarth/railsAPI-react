import React from 'react'
import PropTypes from 'prop-types';
import './App.css'

const App = props => (
  <div className="App">
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import styles from './dashboard-style'
import { withStyles } from '@material-ui/core/styles';

import { openDrawer } from './actions'

class CustomAppBar extends Component {

  handleDrawerOpen = () => {
    this.props.openDrawer()
  };

  render() {
    const { classes, theme, dashboard: { drawer }} = this.props
    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, drawer.open && classes.appBarShift)}
      >
        <Toolbar disableGutters={!drawer.open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, drawer.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
})

CustomAppBar = connect(
  mapStateToProps,
  { openDrawer }
)(CustomAppBar);

export default withStyles(styles, { withTheme: true })(CustomAppBar);

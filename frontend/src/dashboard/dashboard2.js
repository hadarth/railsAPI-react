import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import { connect } from 'react-redux';
import { closeDrawer, openDrawer } from './actions'
import styles from './dashboard-style'

class MiniDrawer extends React.Component {

  handleDrawerOpen = () => {
    this.props.openDrawer()
  }

  handleDrawerClose = () => {
    this.props.closeDrawer()
  }

  renderAppbar = (classes, drawer) => (
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
          eventec Dashboad
        </Typography>
      </Toolbar>
    </AppBar>
  )

  renderDrawer = (classes, drawer, theme) => (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !drawer.open && classes.drawerPaperClose),
      }}
      open={drawer.open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={this.handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      {this.renderDrawerList()}
    </Drawer>
  )

  renderDrawerList = () => (
    <List>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </List>
  )

  render() {
    const { classes, theme, dashboard: { drawer } } = this.props;

    return (
      <div className={classes.root}>
        {this.renderAppbar(classes, drawer)}
        {this.renderDrawer(classes, drawer, theme)}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography >{'Dashboard items goes here'}</Typography>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  dashboard: state.dashboard,
})

MiniDrawer = connect(
  mapStateToProps,
  { closeDrawer, openDrawer }
)(MiniDrawer);

export default withStyles(styles, { withTheme: true })(MiniDrawer);
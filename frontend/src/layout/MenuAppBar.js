import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {}

class MenuAppBar extends React.Component {


  state = {
    auth: true,
    anchorEl: null,
    loggedIn: false
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   if (localStorage.getItem('token') && localStorage.getItem('et-user')) {
  //     this.setState({ loggedIn: true });
  //     return false
  //   } else {
  //     this.setState({ loggedIn: false });
  //     return true
  //   }
  // }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, loggedIn } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
          <Toolbar>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>{loggedIn ? "Log Out" : "Log In"}</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
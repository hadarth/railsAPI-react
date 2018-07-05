import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SignInIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '33.25%', // 16:9
  },
};

// const randomMediaUrl = `https://marmelab.com/posters/beard-${parseInt(
//     Math.random() * 10,
//     10
// ) + 1}.jpeg`;

const randomMediaUrl = 'http://identity-mag.com/wp-content/uploads/2017/08/party-in-barcelona.jpg';

class Welcome extends Component {

  handleLoginClick() {
    this.props.history.push('/login')
  }

  handleSignupClick() {
    this.props.history.push('/signup')
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
          <CardMedia image={randomMediaUrl} className={classes.media} />
          <CardContent>
              <Typography align="center" variant="display4">
                  eventech.io
              </Typography>
              <Typography align="center" variant="display1">
                  Sell your tickets, Manage your team, Control your audience
              </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
              <Button onClick={() => this.handleSignupClick()}>
                  <PersonAddIcon style={{ paddingRight: '0.5em' }} />
                  sign up
              </Button>
              <Button onClick={() => this.handleLoginClick()} >
                  <SignInIcon style={{ paddingRight: '0.5em' }} />
                  login
              </Button>
          </CardActions>
      </Card>
    )
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

export default withStyles(styles)(Welcome);

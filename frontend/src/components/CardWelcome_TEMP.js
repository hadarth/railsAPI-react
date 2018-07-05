import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SignInIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';

import { translate } from 'react-admin';

const styles = {
    media: {
        height: '18em',
    },
};

// const randomMediaUrl = `https://marmelab.com/posters/beard-${parseInt(
//     Math.random() * 10,
//     10
// ) + 1}.jpeg`;

const mediaUrl = 'http://identity-mag.com/wp-content/uploads/2017/08/party-in-barcelona.jpg';

const Dashboard = ({ classes, translate }) => (
    <Card>
        <CardMedia image={mediaUrl} className={classes.media} />
        <CardContent>
            <Typography align="center" variant="display4">
                Welcome to eventech.io
            </Typography>
            <Typography align="center" variant="display1">
                Sell your tickets, Manage your team, Control your audience
            </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button href="https://marmelab.com/react-admin">
                <PersonAddIcon style={{ paddingRight: '0.5em' }} />
                sign up
            </Button>
            <Button href="https://github.com/marmelab/react-admin/tree/master/examples/demo">
                <SignInIcon style={{ paddingRight: '0.5em' }} />
                login
            </Button>
        </CardActions>
    </Card>
);

export default withStyles(styles)(translate(Dashboard));

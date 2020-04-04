import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const ShiurDetails = ({ details }) => {
    const classes = useStyles();
    return (
        <div>
            <List className={classes.root}>
                <Box ml={8}>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={`${details.title}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {details.time} -
                                    </Typography>
                                    {'   ' + details.description}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </Box>
                <Divider variant="inset" component="li" />
            </List>
        </div>
    );
}

export default ShiurDetails;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    avatarSize: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: '15px',
        fontSize: '4em'
    },

}));
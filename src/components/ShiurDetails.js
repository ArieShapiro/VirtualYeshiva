import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const ShiurDetails = ({ details }) => {
    const classes = useStyles();
    return (
        <div>
            <List className={classes.root}>
                <Box ml={5}>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={`${details.time} - ${details.title}`}
                            secondary={
                                <React.Fragment>
                                    {/* <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {details.time} -
                                    </Typography> */}
                                    {'   ' + details.description}
                                </React.Fragment>
                            }
                        />
                        <ListItemText
                            align="end"
                            style={{ color: `${details.isCanceled ?  'red' : 'green'}` }}
                            secondary={
                                <Typography>
                                    {details.isCanceled ?  'Cenceled' : 'On Time'}
                                </Typography>
                            } />
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
    }
}));
import React from 'react'
import DateContextProvider from '../contexts/DateContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DatePanel from '../components/DatePanel';
import Box from '@material-ui/core/Box'
import SideDrawer from './SideDrawer'

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SideDrawer />
                    </IconButton>
                    {/* <DateContextProvider> */}
                        <Box ml={3.5}>
                            <DatePanel />
                        </Box>
                    {/* </DateContextProvider> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

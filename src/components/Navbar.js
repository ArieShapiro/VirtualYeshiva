import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NavbarDatePanel from './NavbarDatePanel';
import SideDrawer from './SideDrawer'
import Box from '@material-ui/core/Box'
import { Route } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles();
    console.log(window.location.pathname)
    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        <SideDrawer />
                    </IconButton>
                    <Box style={{ margin: 'auto' }}>
                        <Route exact path="/VirtualYeshiva/" component={NavbarDatePanel} />
                    </Box>
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
    title: {
        flexGrow: 1,
    },
}));

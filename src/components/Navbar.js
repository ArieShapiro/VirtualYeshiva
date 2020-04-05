import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NavbarDatePanel from './NavbarDatePanel';
import SideDrawer from './SideDrawer'
import Box from '@material-ui/core/Box'

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <SideDrawer />
                    </IconButton>
                    <Box style={{margin:'auto'}}>
                        <NavbarDatePanel />
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
    menuButton: {
        // marginRight: theme.spacing(2),
        // fontSize: '1.3em'
    },
    title: {
        flexGrow: 1,
    },
}));

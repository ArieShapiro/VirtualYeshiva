import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import HomeIcon from './icons/HomeIcon'
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Haores HaTmimim', 'Daily Shiurim', 'WhatsApp Group'].map((text, idx) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {idx === 0 ? <EditOutlinedIcon /> :
                idx === 1 ? <LocalLibraryOutlinedIcon /> :
                  idx === 2 ? <PermPhoneMsgOutlinedIcon /> : null}


            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      <React.Fragment key='left'>
        <HomeIcon onClick={toggleDrawer('left', true)} />
        <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('Click Me')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

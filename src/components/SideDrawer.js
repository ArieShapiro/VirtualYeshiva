import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import HomeIcon from './icons/HomeIcon'
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import { Icon, InlineIcon } from '@iconify/react'
import whatsappIcon from '@iconify/icons-mdi/whatsapp'
import bookIcon from '@iconify/icons-bytesize/book'
import listAlt from '@iconify/icons-el/list-alt'



export default function SideDrawer() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const openWhatsApp = () => {
    console.log('hi')
    window.open('https://www.whatsapp.com/', '_blank');
  }

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>

        <ListItem button key={listProperties[0].text} >
          {listProperties[0].icon}
          <ListItemText primary={listProperties[0].text} />
        </ListItem>

        <ListItem button key='Haores HaTmimim' >
          <ListItemIcon>
            <EditOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Haores HaTmimim' />
        </ListItem>
        <ListItem button key='Daily Shiurim' >
          <ListItemIcon>
            <Icon icon={bookIcon} style={styles.bookIconStyle} />
          </ListItemIcon>
          <ListItemText primary='Daily Shiurim' />
        </ListItem>
        <ListItem button key='WhatsApp Group' onClick={openWhatsApp}>
          <ListItemIcon>
            <Icon icon={whatsappIcon} style={styles.whatsappIconStyle} />
          </ListItemIcon>
          <ListItemText primary='WhatsApp Group' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key='left'>
        <MenuOutlinedIcon onClick={toggleDrawer(true)} />
        <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const styles = {
  listAlt: {
    fontSize: '1.8em',
    marginRight: '12%'
  }
  ,
  bookIconStyle: {
    fontSize: '1.8em',
    marginRight: '12%'
  },
  whatsappIconStyle: {
    fontSize: '1.8em'
  }
}

const listProperties = [
  {
    text: 'Daily Schedule',
    icon: <ListItemIcon><Icon icon={listAlt} style={styles.listAlt} /></ListItemIcon>,
    link: '',
  }
]




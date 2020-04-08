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
import { Icon } from '@iconify/react'
import whatsappIcon from '@iconify/icons-mdi/whatsapp'
import bookIcon from '@iconify/icons-bytesize/book'
import listAlt from '@iconify/icons-el/list-alt'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ForumIcon from '@material-ui/icons/Forum';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from "react-router-dom";



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
    // console.log('hi')
    // window.open('https://www.whatsapp.com/', '_blank');
  }

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <Router> */}
      <List>
        <Link to="/VirtualYeshiva/" style={styles.anchorStyle}>
          <ListItem button key='Daily Schedule' >
            <ListItemIcon>
              <Icon icon={listAlt} style={styles.listAlt} />
            </ListItemIcon>
            <ListItemText primary='Daily Schedule' />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/VirtualYeshiva/haores" style={styles.anchorStyle}>
          <ListItem button key='Haores HaTmimim' >
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Haores HaTmimim' />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/daily-shiurim" style={styles.anchorStyle}>
        <ListItem button key='Daily Shiurim' >
          <ListItemIcon>
            <Icon icon={bookIcon} style={styles.bookIconStyle} />
          </ListItemIcon>
          <ListItemText primary='Daily Shiurim' />
        </ListItem>
        </Link>

        <Divider />
        <Link to="/whatsapp-group" style={styles.anchorStyle}>
          <ListItem button key='WhatsApp Group' onClick={openWhatsApp}>
            <ListItemIcon>
              <Icon icon={whatsappIcon} style={styles.whatsappIconStyle} />
            </ListItemIcon>
            <ListItemText primary='WhatsApp Group' />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/end-of-shema" style={styles.anchorStyle}>
          <ListItem button key='End of Shema' >
            <ListItemIcon>
              <AccessAlarmIcon style={styles.whatsappIconStyle} />
            </ListItemIcon>
            <ListItemText primary='End of Shema' />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/contact" style={styles.anchorStyle}>
          <ListItem button key='Contact' >
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/chat" style={styles.anchorStyle}>
          <ListItem button key='Chat' >
            <ListItemIcon>
              <ForumIcon style={styles.whatsappIconStyle} />
            </ListItemIcon>
            <ListItemText primary='Chat' />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/donate" style={styles.anchorStyle}>
          <ListItem button key='Donate'>
            <ListItemIcon>
              <CreditCardIcon style={styles.whatsappIconStyle} />
            </ListItemIcon>
            <ListItemText primary='Donate' />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/language" style={styles.anchorStyle}>
          <ListItem button key='Language'>
            <ListItemIcon>
              <LanguageIcon style={styles.whatsappIconStyle} />
            </ListItemIcon>
            <ListItemText primary='Language' />
          </ListItem>
        </Link>


        <Divider />
      </List>
      {/* </Router> */}
    </div>
  );

  return (
    <div>
      <React.Fragment key='left'>
        <MenuOutlinedIcon onClick={toggleDrawer(true)} style={{ fontSize: '1.45em' }} />
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
  },
  anchorStyle: {
    textDecoration: 'inherit',
    color: 'inherit'

  }
}






import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 250, marginTop: 11 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Page 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Page 2" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit" component="nav">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            component="img"
            src={Logo}
            alt="logo"
            sx={{ width: '90px', height: '90px' }}
          ></Typography>

          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon sx={{ fontSize: '2.5rem' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: 'rgba(13,13,13,0.9)', color: 'white' },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default NavBar;

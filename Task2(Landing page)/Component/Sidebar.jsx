import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import '../assets/Sidebar.css';
export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();  
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const handleourClick = () => {
    navigate('/service');
    toggleDrawer(false);
  };
  
  const handlefaqClick = () => {
    navigate('/faq');
    toggleDrawer(false);
  };
  const handlefeedClick = () => {
    navigate('/feed');
    toggleDrawer(false);
  };
  const handletesClick = () => {
    navigate('/test');
    toggleDrawer(false);
  };
  const handlefollClick = () => {
    navigate('/foll');
    toggleDrawer(false);
  };
  const handledashClick = () => {
    navigate('/main');
    toggleDrawer(false);
  };
  const handlelogClick = () => {
    navigate('/admin');
    toggleDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
     
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
          <center>Welcome Back!
          </center>
         
          <ListItem button onClick={handlelogClick}>
              <ListItemText primary="Admin Login" />
            </ListItem>
            <ListItem button onClick={handledashClick}>
              <ListItemText primary="Admin Dashboard" />
            </ListItem>
            <ListItem button onClick={handleourClick}>
              <ListItemText primary="Our Services" />
            </ListItem>
            
            <ListItem button onClick={handlefaqClick}>
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button onClick={handletesClick}>
              <ListItemText primary="Testimonials" />
            </ListItem>
            <ListItem button onClick={handlefeedClick}>
              <ListItemText primary="Feedback" />
            </ListItem>
            <ListItem button onClick={handlefollClick}>
              <ListItemText primary="Follow Us" />
            </ListItem>
           
          </List>
        </div>
      </Drawer>
    </Box>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import './menu.css';
import GroupsIcon from '@mui/icons-material/Groups';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import {
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#3BC2D7",
    height: "100%"
  }
}));

const theme = createTheme({
palette: {
    primary: {
    // WE color
    main: '#3BC2D7',
    },
    secondary: {
    main: '#ff00ff',
    },
},
});


export  function Menu() {
    const classes = useStyles();

    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
    const list = (anchor) => (
      <Box
        className={classes.menuSliderContainer} component="div"
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[<a href="LeaveCalendar">Leave Calendar</a> , <a href='EmployeeList'>Employee List</a> , <a href='GroupList'>Group List</a> , <a href='AttributeList'>Attribute List</a> ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <CalendarMonthIcon /> }
                  {index === 1 && <PersonSearchIcon />}
                  {index === 2 && <GroupsIcon />}
                  {index === 3 && <EditAttributesIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>  
      </Box>
    );
  
    return (
      <div>
        {[''].map((anchor) => (
          <React.Fragment key={anchor}>
            <ThemeProvider theme={theme}><Button className='menu-button' onClick={toggleDrawer(anchor, true)}>{anchor} <MenuIcon className='menu'></MenuIcon> </Button> </ThemeProvider>

            <Drawer
              anchor={'left'}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
  
  export default Menu
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import React from "react";
import {
  AccountBox,
  Article,
  DarkMode,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const MyList = ({setmyMOde,theme}) => {
  const mylist = [
    { title: "Homepage", icon: <Home /> },
    { title: "Pages", icon: <Article /> },
    { title: "Groups", icon: <Group /> },
    { title: "Marketplace", icon: <Storefront /> },
    { title: "Friends", icon: <Person /> },
    { title: "Settings", icon: <Settings /> },
    { title: "Profile", icon: <AccountBox /> },
  ];
  return (
    <Box sx={{ flexGrow: "1.1" ,display:{xs:"none",md:"block"}  }}>
      <List sx={{position:"fixed"}}>
        {mylist.map((item) => {
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            
          );
        })}
        <ListItem>
        <ListItemIcon>
          <DarkMode />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
        <Switch
          edge="end"
          onChange={()=>{
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
  
            setmyMOde(theme.palette.mode === "light" ? "dark" : "light"); 

          }}
          checked={checked.indexOf('wifi') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>

      </List>
    </Box>
  );
};

export default MyList;

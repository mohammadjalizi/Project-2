
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import React from 'react'
import { AccountBox, Article, Group, Home, Person, Settings, Storefront } from '@mui/icons-material';

const MyList = () => {
  const mylist=[

    { title: "Homepage", icon: <Home /> },
    { title: "Pages", icon: <Article /> },
    { title: "Groups", icon: <Group /> },
    { title: "Marketplace", icon: <Storefront /> },
    { title: "Friends", icon: <Person /> },
    { title: "Settings", icon: <Settings /> },
    { title: "Profile", icon: <AccountBox /> },

  ]
  return (
   <Box sx={{flexGrow:"1.1"}}>
   <List>

    {mylist.map(item=>{
return(
  <ListItem  key={item.title}  disablePadding>
  <ListItemButton>
    <ListItemIcon>
{item.icon}
    </ListItemIcon>
    <ListItemText primary={item.title} />
  </ListItemButton>
</ListItem>


)

    })}
    </List>


   </Box>
  )
}

export default MyList
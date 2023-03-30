
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import React from 'react'
import { Home } from '@mui/icons-material';

const MyList = () => {
  const mylist=[

    {title:"Home",icon:<Home/>},
    {title:"dddd"}


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
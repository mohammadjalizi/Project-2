
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import React from 'react'

const MyList = () => {
  const mylist=[

    {title:"ddd"},
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
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItemButton>
</ListItem>


)

    })}
    </List>


   </Box>
  )
}

export default MyList
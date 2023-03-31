import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react'

const Rightbar = () => {
  return (
   <Box  flexGrow={2}>
<Typography variant="body1" >
    Online Frinds
</Typography>
<AvatarGroup total={24}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="body1" >
   Latest Photo
</Typography>

<Typography variant="body1" >
Letest Conversation
</Typography>


   </Box>
  )
}

export default Rightbar
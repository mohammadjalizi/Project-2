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
<AvatarGroup sx={{ justifyContent: "center", my: 2 }} total={24}>
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Travis Howard"
          src="https://images.pexels.com/photos/3662979/pexels-photo-3662979.jpeg"
        />

        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/1516196/pexels-photo-1516196.jpeg"
        />

        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Agnes Walker"
          src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Trevor Henderson"
          src="https://images.pexels.com/photos/5951914/pexels-photo-5951914.jpeg"
        />
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
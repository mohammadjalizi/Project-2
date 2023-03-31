import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import React from 'react'
const itemData = [
    {
      img: "https://images.pexels.com/photos/2995336/pexels-photo-2995336.jpeg",
      title: "Breakfast",
    },
    {
      img: "https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg",
      title: "Burger",
    },
    {
      img: "https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg",
      title: "Camera",
    },
  ];
const Rightbar = ({theme}) => {
  return (
   <Box sx={{ bgcolor : theme.palette.favcolor.main}} flexGrow={2}>
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
<ImageList
        gap={10}
        sx={{ width: 500, height: 160, overflowY: "hidden" }}
        cols={3}
        rowHeight={99}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ borderRadius: "5px" }}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

<Typography variant="body1" >
Letest Conversation
</Typography>


   </Box>
  )
}

export default Rightbar
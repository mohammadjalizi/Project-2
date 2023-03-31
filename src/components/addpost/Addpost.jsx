import {  Box, Fab, Modal, Tooltip, Typography, useTheme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import React from 'react'
import { useState } from 'react';

const Addpost = () => {
    const theme=useTheme()
    const[Isopen,setIsopen]=useState(false)
  return (
    <>       
    <Tooltip title="Add Post" sx={{position:"fixed",left:"22px",bottom:"22px"}}>   
    <Fab onClick={()=>{

        setIsopen(true)
    }} color="primary" aria-label="add">
    <AddIcon />
  </Fab>
  </Tooltip>
  <Modal sx={{


  }}
        open={Isopen}
        onClose={()=>{
            setIsopen(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            
            top: "50%",
            left: "50%",
            transform: " translate(-50%, -50%)",
            padding: "22px",
            borderRadius: "6px",
            
            position:"fixed", width:"377px" , bgcolor:theme.palette.background.default}}>
        <Typography
            sx={{ textAlign: "center", mb: 1 }}
            variant="h6"
            component="h2"
          >
            Create a post
          </Typography>
          <Stack alignItems="center" direction="row">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://i.pinimg.com/474x/1b/61/45/1b614533bde5ad1760664fd6c35dd895.jpg"
            />
            <Typography variant="body1">Layla Hassan</Typography>
          </Stack>
        </Box>  
      </Modal>

  </>
  )
}

export default Addpost
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>  
      </Modal>

  </>
  )
}

export default Addpost
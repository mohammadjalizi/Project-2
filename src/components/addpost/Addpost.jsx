import {  Box, Fab, Modal, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import React from 'react'
import { useState } from 'react';

const Addpost = () => {
    const[Isopen,setIsopen]=useState(false)
  return (
    <>       
    <Tooltip title="Add Post" sx={{position:"fixed",left:"22px",bottom:"22px"}}>   
    <Fab color="primary" aria-label="add">
    <AddIcon />
  </Fab>
  </Tooltip>
  <Modal
        open={Isopen}
        onClose={()=>{
            setIsopen(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{}}>
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
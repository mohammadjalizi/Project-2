import { Box, Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import React from 'react'

const Addpost = () => {
  return (
    <Tooltip title="Add Post">   
    <Fab color="primary" aria-label="add">
    <AddIcon />
  </Fab>
  </Tooltip>
  )
}

export default Addpost
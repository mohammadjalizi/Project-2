import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import React from 'react'

const Addpost = () => {
  return (
    <Box>   
    <Fab color="primary" aria-label="add">
    <AddIcon />
  </Fab>
  </Box>
  )
}

export default Addpost
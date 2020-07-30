import React from 'react';

import {Typography, Link} from '@material-ui/core'

const CopyRight = () => {
  return (
    <Typography variant="body2" color="textSecondary" aling="center">
      {'Copyright ©'}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default CopyRight;
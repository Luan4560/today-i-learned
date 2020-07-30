import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

import {
AppBar, 
Typography,
IconButton,
Toolbar,
Button

}
 from '@material-ui/core'
import {Menu} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#7159c1'
  },

  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff'
  },
  
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar
        className={classes.root}
      >
        <Toolbar>
         <IconButton edge="start" className={classes.menuButton}>
          <Menu/>
         </IconButton>
         <Typography variant="h6" className={classes.title}>
           Project
           </Typography>
           <Button size="large" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
import React from 'react';
import Copyright from '../../components/Copyright'

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {LockOutlined} from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },

  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.pallete.grey[100],
      
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(8,4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    margin: theme.spacing(3, 0,2)
  },

  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Login = () => {
  const classes = useStyles()

  return (
    <>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>    

        <Typography variant="h5" component="h1">
          Sign In
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Adress"
            name="email"
            autoComplete="email"
            autoFocus
            />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
          />

          <FormControlLabel
            control={<Checkbox value="remeber" color="primary"/>}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sing Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5} className={classes.box}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>
    </>
  )
}

export default Login;
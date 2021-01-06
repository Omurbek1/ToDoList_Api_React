import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Icon from '@material-ui/core/Icon';
import Search from '../Search'




const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1.4),
    textAlign: 'center',
    color: 'white',
    flex: '1 0 auto',

    // backgroundColor: 'yellow',
    backgroundImage:'url(data:image/jpeg;base64,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)',
    
    height:'90px'
  },
  para: {

    marginLeft: '1300px',
    marginTop: '-50px',
    cursor: 'pointer',
  },
  buttonexit: {
    position: 'absolute',
    marginLeft: '600px',
    marginTop: '-45px',
    cursor: 'pointer',

  }
}));




export default function Home(props) {
  const classes = useStyles();

   
  

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token == null) {
      props.history.push('./login')
    }
  }, [])

  const logOut = () => {
    localStorage.removeItem('token', ' ')
    props.history.push('/login')
  }

  return (

   
      <div>
        <Hidden xlUp>
          <Paper className={classes.paper}><h1> To Do List</h1>
            <p onClick={logOut} className={classes.para}>Выйти</p>
            <Icon style={{ fontSize: 30 }} className={classes.buttonexit}><ExitToAppIcon onClick={logOut} /></Icon>
          </Paper>
        </Hidden>
      
     <div>
     {/* <List/> */}
     <Search/>
     </div>
    </div>



  )
}

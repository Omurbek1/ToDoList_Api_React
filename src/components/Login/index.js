import React, { useState, useEffect, Fragment, Component } from 'react'
import axios from "axios";
import { API } from '../../config';
import { Avatar, Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        backgroundColor: 'aliceblue'
    },
    card: {
        width: '22rem',
        height: 'auto',
        borderRadius: '2px',
        shadowColor: '0 0 12px 0 rgbs(0,115,230,0.5)',
    },
    body: {
        position: 'absolute',
        width: '100%',
        height: "100%",
        backgroundColor: 'rgb(0, 0, 51)',


    },
    loginbutton:{
        marginLeft:'90px',

    },
    p:{
        fontSize:'18px'
    }
}));

export default function Login(props) {
    const [h, setH] = useState('Войти')
    const [p, setP] = useState('Зарегистрироваться')
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [authOrReg, setauthOrReg] = useState('/login/')


   
    useEffect(() => {

        let token = localStorage.getItem('token')
        if (token != null) {
            props.history.push('/')
        }
    })

    const setParameters = () => {
        if (authOrReg == '/login/') {
            setH('Регистрация')
            setauthOrReg('/registration/')
            setP('Войти')
        } else {
            setH('Войти')
            setauthOrReg('/login/')
            setP('Регистрация')
        }
    }
    const sendRequest = (e) => {
        let val = e.target.value
        let data = {}
        if (val == '/login/') {
            data['username'] = login
            data['password'] = pass

        } else {
            data['username'] = login
            data['password1'] = pass
            data['password2'] = pass
        }

        let url = 'dj-rest-auth' + val
        const request = axios.post(API + url, data)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.key)
                localStorage.setItem('id', res.data.user.id)
                props.history.push('/')

            }, (err => {
                console.error(err);
            })
            )

    }

 //style
 const paperStyles = { padding: 20, height: '50vh', width: 280, margin: ' 20px auto', marginTop: 110 }
 const avatarStyles = { backgroundColor: 'rgb(0, 0, 51)', width: '50' }
 const classes = useStyles();
    return (
        // <div className={classes.body}>
        // <div className={classes.wrapper}>
        //     <div className={classes.card}>
        //         <h2>{h}</h2>
        //         <input
        //             type="text"
        //             placeholder="login"
        //             value={login}
        //             onChange={(event) => {
        //                 setLogin(event.target.value)
        //             }}
        //         /><br />
        //         <input
        //             type="password"
        //             placeholder="password"
        //             value={pass}
        //             onChange={(event) => {
        //                 setPass(event.target.value)
        //             }}
        //         />
        //         <button
        //             value={authOrReg}
        //             onClick={(event => {
        //                 sendRequest(event)
        //             })}>Войти</button>

        //         <p onClick={setParameters}>{p}</p>
        //     </div>
        // </div>
        // </div>
        <div className={classes.body}>



            <Grid >
                <Paper elevation={10} style={paperStyles}>
                    <Grid align='center'>
                        <Avatar style={avatarStyles}><HowToRegIcon /></Avatar>
                        <h2>{h}</h2>
                    </Grid>


                    <TextField label='Имя' placeholder='Вводите имя'
                        value={login}
                        onChange={(event) => {
                            setLogin(event.target.value)
                        }} fullWidth required />
                    <br />
                    <br />
                    <TextField label='Пароль' placeholder='Вводите пароль' type='password'
                        value={pass}
                        onChange={(event) => {
                            setPass(event.target.value)
                        }} fullWidth required />
                    <br />
                  
                    <p align="right" className={classes.p}  onClick={setParameters}>{p}</p>
                    
                    <br />
                    <Button className={classes.loginbutton} variant="contained" color="primary" disableElevation
                     value={authOrReg}
                    onClick={(event => {
                        sendRequest(event)
                    })}>
                        Войти
               </Button>
               
                </Paper>


            </Grid>
        </div>

    )
}

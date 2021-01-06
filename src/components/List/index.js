import React, { useState } from 'react'
import Modal from '../Modal'
import { makeStyles } from '@material-ui/core/styles';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import './List.css'

const useStyles = makeStyles((theme) => ({

    list: {
        position: 'realtive',
        width: '840px',
        marginLeft: '330px',
        borderRadius: '25',
        borderBottomRightRadius: '25%',
    

    },
    button: {
        marginLeft: '20px',
        margin: theme.spacing(1),
        
    },
    h3:{
        marginLeft: '60px',
        fontFamily: 'Bungee Inline cursive',
        fontSize: '24px',
        marginTop: '10px',
    
    }


}));

export default function List(props) {
    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState()
    const [todo, setTodo] = useState('')

    const classes = useStyles();

    const edit = (todo, id) => {
        setTodo(todo)
        setShowModal(true)
        setId(id)
    }
    return (
        <div className='back'>
            <div className={classes.list}  >
                {props.data ?
                    props.data.map(el => {
                        return (
                            <div key={el.id} style={el.status ?
                                { background: '#FEAD59' } :
                                { background: '#DB6B6B' }}>

                                <h3 className={classes.h3}>{el.todo}</h3>
                                {
                                    el.status ? '' :
                                        <Button onClick={() => props.done(el.id)}
                                         variant="contained"
                                         color="secondary"
                                         className={classes.button}
                                         startIcon={< CheckCircleSharpIcon />}>
                                            Done</Button>
                                }
                               
                                <Button onClick={() => props.delete(el.id)}
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />}
                                >Delete </Button>
                                <Button onClick={() => edit(el.todo, el.id)}
                                         variant="contained"
                                         color="secondary"
                                         className={classes.button}
                                         startIcon={<  EditSharpIcon />}>
                                            Done</Button>
                            </div>

                        )
                    })
                    : null
                }
                <Modal
                    name={todo}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    id={id}
                    save={props.save}
                />
            </div>
        </div>
    )
}
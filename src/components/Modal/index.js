import React, { useState } from 'react'
import SaveAltSharpIcon from '@material-ui/icons/SaveAltSharp';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({


    button: {
        margin: theme.spacing(1),

    },



}));
export default function Modal(props) {
    const [val, setVal] = useState('')
    const classes = useStyles();
    const saveEdit = () => {
        props.save(props.id, val)
        props.setShowModal(false)
    }
    return (
        <div style={
            !props.showModal ?
                {
                    display: "none"
                } :
                {
                    display: 'block',
                    position: 'absolute',
                    width: '50%',
                    left: '25%',
                    backgroundColor: 'white',
                    height: "300px",
                    textAlign: 'center',
                    top: '15%',
                    boxShadow: '5px 5px 5px #000'


                }}>
            <h2>EDIT</h2>
            <span onClick={() => {


                props.setShowModal(false)
            }}></span>
            <h4>{props.name}</h4>
            <input
                type="text"
                value={val}
                onChange={(event) => {
                    setVal(event.target.value)
                }}
            />
            
            <Button onClick={saveEdit}
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<  SaveAltSharpIcon />}>
                Save</Button>
        </div>

      
    )
}

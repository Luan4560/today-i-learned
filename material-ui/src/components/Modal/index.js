import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Button, Modal} from '@material-ui/core'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    maxWidth: 1000,
    width: '100%',
    height: '90vh'
  },
}));


const  ModalStyle = () => {
  const classes = useStyles();

  function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false); 

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <ModalStyle />
    </div>
  );
 return (

   <>
    <Button variant="contained" color="default" onClick={handleOpen}>
      Open Modal
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby='simple-modal-description'
    >
      {body}
    </Modal>
   </>
   
 )
}

export default ModalStyle;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { IconButton, Modal } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: '30%',
    marginTop: '5%',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ProductModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  console.log(props)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div  className={classes.paper}>
      <Card className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={process.env.PUBLIC_URL + props.produto.imageUrl}
        />
        <CardContent>
          <Typography variant="body2"  component="p" className={classes.title}>
          {props.produto.titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions> 
      {props.produto.valor}
      </CardActions>
    </Card>
    </div>
  );

  return (
    <div>
      <IconButton onClick={handleOpen} style={{marginLeft: 70}}>
          <ShoppingCart style={{color: '#B11E89'}}/>
        </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

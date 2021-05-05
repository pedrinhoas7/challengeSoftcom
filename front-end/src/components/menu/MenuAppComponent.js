import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Divider } from '@material-ui/core';
import { AccessTime, Motorcycle } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  barra: {
     flex: 1,
     backgroundColor: '#FFFFFF',
     color: '#333333',
     maxHeight: '15%'
  },
  logo: {
    border: '1.5px solid',
    borderColor: '#B41C8B',
    height: '50%',
    width: '50%',
    marginLeft: 10
  },
  title: {
    /* fontSize: 26,
    fontWeight: 'bold',
    font: 'Quicksand',
    marginTop: '-4%',
    marginLeft: 10,
    width: '30%' */
  },
  status: {
    /* fontSize: 12,
    marginLeft: 10,
    marginTop: -28, */
    color: '#1BBB16',
  },
  endereco:{
    /* fontSize: 16,
    marginTop: 12,
    marginLeft: -210, */
  },
  delivery:{
    /* fontSize: 16,
    marginLeft: -275,
    marginTop: 50, */
  },
  entrega:{
    /* fontSize: 16,
    marginLeft: 10,
    marginTop: 50, */
  },
  divider: {
    backgroundColor: '#ECECEC',
    /* marginLeft: 320,
    height: 60,
    marginTop: 10,
    width: 0.1, */
  },
  carrinho:{
    /* marginLeft: 10,
    fontSize: 20,
    marginTop: -15, */
  },
  value: {
/*     marginLeft: -80,
    marginTop: 10, */
    color: '#B41C8B'
  }
}));

export default function MenuAppComponent(props) {

  const classes = useStyles();
  console.log(props.empresa.name)
  return (
    <div className={classes.root} >
      
      <AppBar className={classes.barra}>
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu" disabled>
            <Avatar className={classes.logo} src={process.env.PUBLIC_URL + '/logo.png'}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.empresa.name} 
          </Typography>      
          <Typography color="inherit" className={classes.status}>
              <AccessTime style={{width: 6, height: 6}}/>{props.empresa.status}
          </Typography>
          <Typography className={classes.endereco}>
          {props.empresa.endereco}
        </Typography>
        <Typography className={classes.delivery}>
          <Motorcycle style={{width: 8, height: 8}}/>
          <b style={{color: '#3F3F3F'}}>Delivery:</b> {props.empresa.delivery}
        </Typography>
        <Typography className={classes.entrega}>
           <b>Entrega:</b> {props.empresa.entrega}
        </Typography> 
        <Divider orientation="vertical" flexItem  className={classes.divider}/>
        <ShoppingCartIcon style={{width: 12, height: 12, marginTop: -15}}/>
        <Typography className={classes.carrinho}>
            {props.carrinho.quantidade} produtos no carrinho
        </Typography>
        <Typography className={classes.value} >
            R$ {props.carrinho.valor}
        </Typography> 
        </Toolbar>
      </AppBar>
    </div>
  );
}

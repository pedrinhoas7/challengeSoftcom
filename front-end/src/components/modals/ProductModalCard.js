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
import { IconButton } from '@material-ui/core';
import ProductModal from './modals/ProductModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    fontWeight: 'bold'
  }
});


export default function ProductModalCard(props) {
  const classes = useStyles();
  {console.log(props.produto.id)}
  
  return (
    <p>ola</p>
  );
}

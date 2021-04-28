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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    fontWeight: 'bold'
  }
});

export default function CardProductComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={process.env.PUBLIC_URL + '/product.png'}
        />
        <CardContent>
          <Typography variant="body2"  component="p" className={classes.title}>
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
          valor
        <IconButton>
          <ShoppingCart style={{color: '#B11E89'}}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

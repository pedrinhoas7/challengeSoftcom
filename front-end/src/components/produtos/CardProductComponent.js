import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProductModal from '../modals/ProductModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10,
  },
  title: {
    fontWeight: 'bold'
  }
});


export default function CardProductComponent(props) {
  const classes = useStyles();
  
  return (
    <>
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
      <CardActions style={{fontWeight: 'bold'}}> 
       R$ {props.produto.valor}
      <ProductModal
        produto={props.produto}
      />
      </CardActions>
    </Card>
    </>
  );
}

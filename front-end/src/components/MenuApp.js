import React, { Component } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Box } from '@material-ui/core';
import { Motorcycle, MotorcycleOutlined, Shop } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import  MenuService  from '../services/MenuService';

/* const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: '#00000',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    data: {
      marginTop: 10,
      flexGrow: 1,
      color: "#333333",
      fontFamily: 'Quicksand',
      
    },
    avatar: {
        width:100,
        height: 100,
        borderWidth: 2, 
        
    },
    shoppingCart: {
      color: "#333333",
      fontFamily: 'Quicksand',
    }

  }),
); */
function getEmpresa() {
  const resp = MenuService.getEmpresa();
    this.setState({empresa: resp.empresa});
}
const menu =  MenuService.getEmpresa();
/* const classes = useStyles(); */
class MenuApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
        empresa: [],
        name: ''
    };
}
  componentDidMount(){
    const resp = MenuService.getEmpresa().then(data => { 
      const empresa = data
      this.setState({empresa: empresa})
    });
  }

    render(){
  return (
    <div  >
      <AppBar position="static" style={{ background: '#00000', color: '#00000' }}>
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography 
          variant={'caption'}>
          <p style={{ fontFamily: 'Quicksand', fontWeight: "bold" }}>
              {this.state.empresa.name}  || {this.state.empresa.status}
          </p>
          <p>
              {this.state.empresa.endereco}
          </p>
          <p>
              <b><Motorcycle 
              fontSize={'small'}
              /> DELIVERY:</b> 30m - 1:40m   <b> ENTREGA:</b> À partir de R$ 3,00
          </p>
          </Typography>
          <Typography 
          variant={'caption'}>
            <p>
            <ShoppingCartIcon/>
                5 Produtos no carrinho
            </p>
            <p>
                R$ 349
            </p>
            </Typography>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}
}
export default MenuApp;

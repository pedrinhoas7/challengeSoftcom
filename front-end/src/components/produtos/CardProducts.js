import React, { Component } from 'react';
import  MenuService  from '../../services/MenuService';
import  ProductService  from '../../services/ProductService';
import CardProductComponent from '../produtos/CardProductComponent';
import MenuAppComponent from '../menu/MenuAppComponent';
import ProductModal from '../modals/ProductModal';
import Grid from '@material-ui/core/Grid';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { Search, ShoppingBasket } from '@material-ui/icons';

class CardProducts extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        produtos: [],
        produto: undefined,
        sugestao: [],

    };
}

getOption(option){
  console.log(option)
}
  componentDidMount(){
    const res = ProductService.getProdutos().then(produtos => { 
        console.log(produtos)
      this.setState({produtos: produtos.data})
    });
  }
    render(){
  return (
    <p>oi</p>
  );
}
}
export default CardProducts;

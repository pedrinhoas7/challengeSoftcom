import React, { Component } from 'react';
import  ProductService  from '../../services/ProductService';
import CardProductComponent from '../produtos/CardProductComponent';
import Grid from '@material-ui/core/Grid';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


class Coleiras extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        produtos: [],

    };
}

getOption(option){
  console.log(option)
}
  componentDidMount(){
    const res = ProductService.getProdutos().then(produtos => { 
        console.log(res)
      this.setState({produtos: produtos.data})
    });
  }
    render(){
  return (
    <div style={{backgroundColor: '#F3F3F4'}}>
        Coleiras
        <Grid container spacing={24}>
        {this.state.produtos.map((produto) => (
        <Grid>
          {produto.categoria === 'coleiras' ?
          <>
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
    ))}
        </Grid>
    </div>
  );
}
}
export default Coleiras;

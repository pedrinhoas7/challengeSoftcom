import React, { Component } from 'react';
import  ProductService  from '../../services/ProductService';
import CardProductComponent from '../produtos/CardProductComponent';
import Grid from '@material-ui/core/Grid';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


class ProdutoAutoComplete extends Component {
  
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
        console.log(res)
      this.setState({produtos: produtos.data})
    });
  }
    render(){
  return (
    <div style={{backgroundColor: '#F3F3F4'}}>
      <Autocomplete
      id=""
      autoSelect
      options={this.state.produtos}
      getOptionLabel={(option) => option.titulo}
      style={{ width: 300, backgroundColor: 'white' }}
      renderInput={(params) => 
      <TextField {...params} 
      label="O que você procura ?" 
      variant="outlined"
      />
      }
      />
    </div>
  );
}
}
export default ProdutoAutoComplete;

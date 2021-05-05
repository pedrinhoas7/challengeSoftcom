import React, { Component } from 'react';
import  MenuService  from '../services/MenuService';
import  ProductService  from '../services/ProductService';
import CardProductComponent from './CardProductComponent';
import MenuAppComponent from './layout/MenuAppComponent';
import ProductModal from './modals/ProductModal';
import Grid from '@material-ui/core/Grid';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { Search, ShoppingBasket } from '@material-ui/icons';

class CardProduct extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        produtos: [],
        produto: undefined,

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
      <Grid container spacing={24}>
       {this.state.produtos.map((produto) => (
         <>
        <Grid item lg={2}>
          {produto.categoria == 'sugestao' ?
          <>
           Sugestão do Vendedor
           <CardProductComponent
           produto={produtos}
           />
           </> : null}
        </Grid>
        <Grid>
        {produto.categoria == 'brinquedos' ?
        <>
           Brinquedos
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
           {produto.categoria == 'camaecasa' ? 
           <>
           Cama e casa
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
           {produto.categoria == 'coleiras' ? 
           <>
           Coleiras
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
           {produto.categoria == 'ossosepetiscos' ? 
           <>
           Ossos e Petiscos
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
        {produto.categoria == 'saude' ? 
           <>
           Saude
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        </>
    ))}
    </Grid>
    </div>
  );
}
}
export default CardProduct;

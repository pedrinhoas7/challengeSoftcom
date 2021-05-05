import React, { Component } from 'react';
import  ProductService  from '../../services/ProductService';
import CardProductComponent from '../produtos/CardProductComponent';

import Grid from '@material-ui/core/Grid';

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
        console.log(res)
      this.setState({produtos: produtos.data})
    });
  }
    render(){
  return (
    <Grid container spacing={24}>
       {this.state.produtos.map((produto) => (
         <>
        <Grid item lg={2}>
          {produto.categoria === 'sugestao' ?
          <>
           Sugestão do Vendedor
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
        {produto.categoria === 'brinquedos' ?
        <>
           Brinquedos
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
           {produto.categoria === 'camaecasa' ? 
           <>
           Cama e casa
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
           {produto.categoria === 'coleiras' ? 
           <>
           Coleiras
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
           {produto.categoria === 'ossosepetiscos' ? 
           <>
           Ossos e Petiscos
           <CardProductComponent
           produto={produto}
           />
           </> : null}
        </Grid>
        <Grid>
        {produto.categoria === 'saude' ? 
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
  );
}
}
export default CardProducts;

import React, { Component } from 'react';
import  MenuService  from '../services/MenuService';
import  ProductService  from '../services/ProductService';
import CardProductComponent from './CardProductComponent';
import MenuAppComponent from './layout/MenuAppComponent';
import ProductModal from './modals/ProductModal';

class CardProduct extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        produtos: [],

    };
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
       {this.state.produtos.map((produto) => (
           <CardProductComponent
           produto={produto}
           />
    ))}
    </div>
  );
}
}
export default CardProduct;

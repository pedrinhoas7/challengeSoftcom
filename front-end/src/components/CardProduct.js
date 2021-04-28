import React, { Component } from 'react';
import  MenuService  from '../services/MenuService';
import  ProductService  from '../services/ProductService';
import CardProductComponent from './CardProductComponent';
import MenuAppComponent from './layout/MenuAppComponent';

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
    <div>
       {this.state.produtos.map((produto, index) => (
           <CardProductComponent
           produto={produto}
           />
    ))}
    </div>
  );
}
}
export default CardProduct;

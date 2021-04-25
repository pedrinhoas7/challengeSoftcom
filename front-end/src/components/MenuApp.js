import React, { Component } from 'react';
import  MenuService  from '../services/MenuService';
import MenuAppComponent from './layout/MenuAppComponent';

class MenuApp extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        empresa: [],

    };
}
  componentDidMount(){
    const resp = MenuService.getEmpresa().then(data => { 
      const empresa = data
      console.log(resp)
      this.setState({empresa: empresa})
    });
  }
  
    render(){
  return (
    <div >
      <MenuAppComponent
      empresa={this.state.empresa}
      />
    </div>
  );
}
}
export default MenuApp;

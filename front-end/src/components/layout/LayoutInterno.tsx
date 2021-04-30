import React, { Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import MenuApp from '../MenuApp';
import MenuCategoria from '../MenuCategoria';
import FooterBar from './FooterBar';


class LayoutInterno extends Component{
    
    render(){
        return <>
        <Switch>
               <Route path='/home' exact={true}>
                    <MenuApp/>
                    <MenuCategoria/>
                    <FooterBar/>
            </Route>
        </Switch>
        </>
    }
}

export default LayoutInterno;
import React, { Component} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import MenuApp from '../MenuApp';
import MenuCategoria from '../MenuCategoria';


class LayoutInterno extends Component{
    
    render(){
        return <>
        <Switch>
               <Route path='/home' exact={true}>
                    <MenuApp/>
            </Route>
        </Switch>
        </>
    }
}

export default LayoutInterno;
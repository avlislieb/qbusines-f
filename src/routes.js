import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } name="home" />
                <Route name="produtos" path="/produtos/:nomeCategoria"   children={ <Produtos /> } />
            </Switch>
        </BrowserRouter>
    );
} 
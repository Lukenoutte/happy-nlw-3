import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import OrphanagesMap from './pages/OrphanagesMapPage';
import Landing from './pages/LandingPage';
function Routes(){
    return(
    <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Landing}/> 
                <Route path="/orphanages" component={OrphanagesMap}/>
            </Switch>
     </BrowserRouter>)
}
export default Routes;
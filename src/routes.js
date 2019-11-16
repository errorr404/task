import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './modules/Home';
const Routes = () => (
<Router>
    <Switch>
        <Route path="/" component = {Home}  exact/>
    </Switch>
</Router>
)

export default Routes;
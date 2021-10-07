
import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Detail from '../pages/detail';
import Create from '../pages/create';


const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/create" exact component={Create}></Route>
        </Switch>
    );
}

export default Router;
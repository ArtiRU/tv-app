import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {publicRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {
                publicRoutes.map(route => <Route path={route.path} component={route.component} key={route.path}
                                                 exact={route.exact}/>)
            }
        </Switch>
    );
};

export default AppRouter;
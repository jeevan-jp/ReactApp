import React from 'react';
import Series from '../../containers/series';
import { Switch, Route } from 'react-router-dom';

const Main = props => {
    return (
        <Switch>
            <Route exact path="/" component={Series}/>
        </Switch>
    )
}

export default Main;
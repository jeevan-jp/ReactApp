import React from 'react';
import Series from '../../containers/series';
import SingleSeries from '../SingleSeries';
import { Switch, Route } from 'react-router-dom';

const Main = props => {
    return (
        <Switch>
            <Route exact path="/" component={Series}/>
            <Route exact path="/series/:id" component={SingleSeries} />
        </Switch>
    )
}

export default Main;
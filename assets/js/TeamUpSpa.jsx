import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import DetailCard from "./DetailCard";


class TeamUpSpa extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/group_details/:group_id' component={DetailCard}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default TeamUpSpa;
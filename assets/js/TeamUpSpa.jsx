import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import DetailCard from './DetailCard';
import LogIn from './LogIn';
import SearchResults from './SearchResults';
import CreateGroupPage from './CreateGroupPage';
import NoResults from './NoResults';
import SeeAll from './SeeAll';
import MyAccountPage from './MyAccountPage';

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
                        <Route exact path='/login' component={LogIn}/>
                        <Route exact path='/results/:search_value' component={SearchResults}/>
                        <Route exact path='/results/:department' component={SearchResults}/>
                        <Route exact path='/create' component={CreateGroupPage}/>
                        <Route exact path='/noresults' component={NoResults}/>
                        <Route exact path='/seeall' component={SeeAll}/>
                        <Route exact path='/myaccount' component={MyAccountPage}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default TeamUpSpa;
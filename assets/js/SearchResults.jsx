import React from 'react';
import NavBar from './NavBar';
import SearchAreaAlone from './SearchAreaAlone';
import FilterSearchResultsPage from './FilterSearchResultsPage';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'


class SearchResultsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="divider"></div>
                    <div className="section">
                        <SearchAreaAlone/>
                    </div>

                    <div className="row">
                        <FilterSearchResultsPage/>
                    </div>

                    <div className="row">
                        {this.props.study_groups.map((group) =>
                            <div key={group.id} className="col s12">
                                <SingleResult key={group.id} group_id={group.id}
                                              title={group.title} description={group.description}
                                              date={group.date} time={group.time} location={group.location}
                                />
                            </div>)}
                    </div>
                </div>
                <footer className="page-footer orange footer-copyright">
                    <div className="footer-copyright">
                        <div className="container">
                            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">TeamUp Crew!!!</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

class SingleResult extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card hoverable card-search-result ">
                            <div className="card-content">
                                <div className="row">
                                    <span className="card-title col s6 blue-text">{this.props.title}</span>
                                    <span className="col s6 right-align">
                                <i className="material-icons blue-text">date_range</i>
                                        {this.props.date}</span>
                                </div>

                                <p>{this.props.description}</p>
                            </div>
                            <div className="card-action light-blue lighten-5">
                                <div className="row">
                                    <i className="material-icons blue-text">access_time</i>
                                    <span>{this.props.time} </span>
                                    <i className="material-icons blue-text">location_on</i>
                                    <span>{this.props.location} </span>
                                    <a href="#" className="right waves-effect waves-light btn green lighten-1">Join</a>
                                    <Link to={"/group_details/" + this.props.group_id}
                                          className="right waves-effect orange-text text-accent-4 btn-flat">See More</Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {study_groups: state.study_groups}
}

const SearchResults = connect(mapStateToProps)(SearchResultsView);

export default SearchResults;
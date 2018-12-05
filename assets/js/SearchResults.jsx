import React from 'react';
import NavBar from './NavBar';
import SearchAreaAlone from './SearchAreaAlone';
import FilterSearchResultsPage from './FilterSearchResultsPage';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import FuzzySearch from 'fuzzy-search';
import {ToastContainer, toast, Flip} from 'react-toastify';


class SearchResultsView extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let search_val = this.props.match.params.search_value;
        if(!search_val) {
            return (<Redirect to='/'/>);
        }
        const searcher = new FuzzySearch(this.props.study_groups, ['description', 'course', 'department', 'title'], {
            caseSensitive: false,
        });
        const groups = searcher.search(search_val);

        /*let groups = this.props.study_groups.filter((group) => group.description.includes(this.props.value) || group.course.includes(this.props.value) ||
            group.department.includes(this.props.value))*/

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
                        {groups.map((group) =>
                            <div key={group.id} className="col s12">
                                <SingleResult key={group.id} user_info={this.props.user_info} group_id={group.id}
                                              title={group.title} description={group.description}
                                              date={group.date} time={group.time} location={group.location}
                                />
                            </div>)}
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>

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
    constructor(props){
        super(props);
    }

    handleClick(group_id) {
        if (this.props.user_info.username) {
            toast.success("You have joined this study group!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_JOIN_GROUP, group_id: group_id, fullname: this.props.user_info.fullname})
        } else {
            toast.warn("Login before you join a group");
        }
    }

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
                                        <button onClick={(e) => this.handleClick(this.props.group_id, e)} className="right waves-effect waves-light btn green lighten-1">Join</button>
                                    <Link to={"/group_details/" + this.props.group_id}
                                          className="right waves-effect orange-text text-accent-4 btn-flat">See More</Link>
                                </div>
                            </div>
                    </div>
                </div>
                <ToastContainer
                    transition={Flip}
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange={false}
                    draggable={false}
                    pauseOnHover={false}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {study_groups: state.study_groups, user_info: state.user_info}
}

const SearchResults = connect(mapStateToProps)(SearchResultsView);

export default SearchResults;
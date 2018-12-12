import React from 'react';
import NavBar from './NavBar';
import SearchAreaAlone from './SearchAreaAlone';
import FilterSearchResultsPage from './FilterSearchResultsPage';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import FuzzySearch from 'fuzzy-search';
import {ToastContainer, toast, Flip} from 'react-toastify';
import {USER_JOIN_GROUP, USER_LEAVE_GROUP} from "./store";
import store from "./store";
import NoResults from "./NoResults";


class SearchResultsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let search_val = this.props.match.params.search_value;
        if (!search_val) {
            return (<Redirect to='/'/>);
        }
        const searcher = new FuzzySearch(this.props.study_groups, ['description', 'course', 'department', 'title'], {
            caseSensitive: false,
        });
        const groups = searcher.search(search_val);
        groups.sort((group1, group2) => group1.id - group2.id)

        if(groups.length == 0){
            return(<NoResults/>);
        }else {
            return (
                <div>
                    <div>
                        <NavBar/>
                        <div className="container">
                            <div className=" breadnav nav-wrapper section">
                                <div className="col s12">
                                    <a href="#!" className="breadcrumb blue-text">Home</a>
                                    <a href="#!" className="breadcrumb blue-text">Search Results</a>
                                </div>
                            </div>
                            <div className="section">
                                <SearchAreaAlone/>
                            </div>

                            <div className="section">
                                <FilterSearchResultsPage/>
                            </div>

                            <div className="row">
                                <div className="col s1">
                                </div>
                                <div className="col s11">
                                    {groups.map((group) =>
                                        <div key={group.id}>
                                            <SingleResult key={group.id} user_info={this.props.user_info} group_id={group.id}
                                                          title={group.title} description={group.description}
                                                          date={group.date} time={group.time} location={group.location}
                                                          attendees={group.attendees}
                                            />
                                        </div>)}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class SingleResult extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickJoin(group_id) {
        if (this.props.user_info.username) {
            toast.success("You have joined this study group!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_JOIN_GROUP, group_id: group_id, fullname: this.props.user_info.fullname,
            username: this.props.user_info.username})
        } else {
            toast.warn("Login before you can join a group");
        }
    }

    handleClickLeave(group_id) {
        if (this.props.user_info.username) {
            toast.warn("You have left this study group!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_LEAVE_GROUP, group_id: group_id, fullname: this.props.user_info.fullname,
            username: this.props.user_info.username})
        } else {
            toast.warn("Login before you can leave a group");
        }
    }

    renderActionButton(user_already_joined, group_id) {

        if (user_already_joined) {
            return (<span className="right">
                <Link to={"/group_details/" + this.props.group_id}
                      className="waves-effect orange-text text-accent-4 btn-flat">See More</Link>
                <button onClick={(e) => this.handleClickLeave(group_id, e)}
                        className="waves-effect black-text waves-light btn yellow lighten-1">
                    Leave
                </button>

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
            </span>);
        } else {
            return (<span className="right">
                <Link to={"/group_details/" + this.props.group_id}
                      className="waves-effect orange-text text-accent-4 btn-flat">See More</Link>
                <button onClick={(e) => this.handleClickJoin(group_id, e)}
                        className="waves-effect waves-light btn green lighten-1">
                    Join
                </button>

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
            </span>);
        }
    }


    render() {

        const group_id = this.props.group_id;
        let user_already_joined = false;

        if (this.props.attendees.includes(this.props.user_info.username)) {
            user_already_joined = true;
        }
        let action_buttons = this.renderActionButton(user_already_joined, group_id);


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
                            <div>
                                <i className="material-icons blue-text">access_time</i>
                                <span>{this.props.time} </span>
                                <i className="material-icons blue-text">location_on</i>
                                <span>{this.props.location} </span>
                                {action_buttons}
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

// const SingleResults = connect(mapStateToProps)(SingleResult);
const SearchResults = connect(mapStateToProps)(SearchResultsView);

export default SearchResults;
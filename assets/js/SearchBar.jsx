import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";



class SearchBarView extends React.Component {
    constructor(props) {
        super(props);
        this.state={value: ""};
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        this.setState({value: event.target.value });
    }



    render() {

        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container col s12">
                    <div className="col s12 offset-s5">
                        <h4 className=" offset s2 center header center orange-text">Do you love studying in groups?</h4>
                        <div className="col s12 offset-s6">
                            <h6 className="header center bold ">Find a group with TeamUp</h6>
                        </div>
                        <div>
                            <form className="col s12 ">
                                <div className="row">
                                    <div className="input-field col s10">
                                        <i className="material-icons prefix">search</i>
                                        <input id="search" onChange={this.handleInputChange} type="text" value={this.state.value} class="validate"/>
                                        <label htmlFor="search">Search here for a Study group</label>
                                        <span className="helper-text">Search by Department Name, CourseID or Topic</span>
                                    </div>
                                    <div className="input-field col s2">
                                        <Link to={"/results/" + this.state.value} id="suffix download-button" className="waves-effect waves-light btn blue">Search</Link>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{study_groups: state.study_groups, user_info: state.user_info}
}

const SearchBar = connect(mapStateToProps)(SearchBarView);

export default SearchBar;
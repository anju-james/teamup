import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
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
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">Search here for a Study group</label>
                                        <span className="helper-text">Search by Department Name, CourseID or Topic</span>
                                    </div>
                                    <div className="input-field col s2">
                                        <a id="suffix download-button" class="waves-effect waves-light btn blue">Search</a>
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

export default SearchBar;
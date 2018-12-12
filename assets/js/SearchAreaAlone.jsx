import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


class SearchAreaAloneView extends React.Component{
    constructor(props) {
        super(props);
        this.state={value: ""};
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        this.setState({value: event.target.value });
    }



    render() {
        return(
            <div className="container">
            <br></br>
                <form className="row valign-wrapper ">
                    <div className="col s12 valign">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">search</i>
                            <input id="search" onChange={this.handleInputChange} type="text" value={this.state.value} className="validate"/>
                            <label htmlFor="textarea1">Search here for a Study group</label>
                            <span className="helper-text">Search by Department Name, CourseID or Topic</span>
                        </div>
                        <div className="input-field col s2">
                            <Link to={"/results/" + this.state.value} id="suffix download-button" className="waves-effect waves-light btn blue">Search</Link>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return{study_groups: state.study_groups, user_info: state.user_info}
}

const SearchAreaAlone = connect(mapStateToProps)(SearchAreaAloneView);


export default SearchAreaAlone;
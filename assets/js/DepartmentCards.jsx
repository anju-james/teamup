import React from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom';


class DepartmentCardsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row ">
                {this.props.departments.map((name, index) =>
                    <div key={index} className="col s3">
                        <Department key={index} name={name}/>
                    </div>)}
            </div>
        );
    }
}

class Department extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(department_name) {

    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="department-card center-align light-blue accent-1 hoverable">
                        <div className="card-title">
                            <div className="card-content">
                                <br></br>
                                <div className="center-align">
                                    <h6><b>
                                        <Link to={"/results/" + this.props.name}
                                              onClick={(e) => this.handleClick(this.props.name, e)}
                                        className="blue-grey-text text-darken-3">
                                            {this.props.name}</Link>
                                        </b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {departments: state.department_categories, study_groups: state.study_groups}
};

const DepartmentCards = connect(mapStateToProps)(DepartmentCardsView);
export default DepartmentCards;
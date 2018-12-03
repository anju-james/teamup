import React from 'react'
import {connect} from "react-redux";

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
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="department-card center-align light-blue accent-1 hoverable">
                        <div className="card-title">
                            <div className="card-content">
                                <br></br>
                                <div className="center-align">
                                    <h6><b>{this.props.name}</b></h6>
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
    return {departments: state.department_categories}
}

const DepartmentCards = connect(mapStateToProps)(DepartmentCardsView);
export default DepartmentCards;
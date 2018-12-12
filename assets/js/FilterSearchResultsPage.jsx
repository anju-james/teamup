import React from 'react';
import {connect} from "react-redux";

class FilterSearchResultsPageView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let select_elems = document.querySelectorAll('select');
        if(select_elems){
            M.FormSelect.init(select_elems, {});
        }
    }


    render() {

        let departments = this.props.department_categories;
        let courseids = this.props.study_groups.map((group) => group.course);

        return (
            <div className="container">
                <div className="row">
                    <div className="col push-l1">
                        <br></br>
                        <span>Filter By</span>
                    </div>
                    <div className="col push-l1">
                        <select className="grey lighten-3"
                                defaultValue="">
                            <option value="" disabled >Department</option>
                            {departments.map((department) => <option value="1">{department}</option>)}
                        </select>
                    </div>

                    <div className="col push-l1">
                        <select className="grey lighten-3" defaultValue="">
                            <option value="" disabled >CourseID</option>
                            {courseids.map((course) =><option value="1">{course}</option>)}
                        </select>
                    </div>

                </div>
                <div className="divider"></div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {study_groups: state.study_groups, department_categories:state.department_categories}
}

const FilterSearchResultsPage = connect(mapStateToProps)(FilterSearchResultsPageView);

export default FilterSearchResultsPage;
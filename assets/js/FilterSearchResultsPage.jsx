import React from 'react';

class FilterSearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col push-l1">
                        <br></br>
                        <span>Filter By</span>
                    </div>
                    <div className="col push-l1">
                        <select className="browser-default light-blue lighten-5" defaultValue="">
                            <option value="" disabled >Department</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>

                    <div className="col push-l1">
                        <select className="browser-default light-blue lighten-5" defaultValue="">
                            <option value="" disabled >CourseID</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>

                    <div className="col push-l1">
                        <select className="browser-default light-blue lighten-5" defaultValue="">
                            <option value="" disabled >Date</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>


                </div>
                <div className="divider"></div>

            </div>
        );
    }
}

export default FilterSearchResultsPage;
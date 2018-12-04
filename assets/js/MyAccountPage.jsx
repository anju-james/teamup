import React from 'react';
import NavBar from "./NavBar";
import FilterMyAccountGroups from "./FilterMyAccountGroups";

class MyAccountPage extends React.Component {
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
                        <FilterMyAccountGroups/>
                    </div>

                </div>
            </div>);
    }
}
export default MyAccountPage;



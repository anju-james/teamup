import React from 'react'
import SearchBar from "./SearchBar";
import StudyGroupCard from "./StudyGroupCard";
import DepartmentCards from "./DepartmentCards";
import NavBar from './NavBar';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="divider"></div>
                <div className="section">
                    <SearchBar/>
                </div>

                <div className="row">
                    <span className="col s11"><b>Popular study groups this week</b></span>
                    <span className="col s1 blue-text">See All</span>
                    <div className="section">
                        <StudyGroupCard/>
                    </div>
                </div>

                <div className="row">
                    <span className="col s11"><b>Explore by Departments</b></span>
                    <span className="col s1 blue-text">See All</span>
                    <div className="section">
                        <DepartmentCards/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
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
                <NavBar/>
            <div class="container">
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
            <footer className="page-footer orange footer-copyright">
                <div className="footer-copyright">
                    <div className="container">
                        Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Anju James</a>
                    </div>
                </div>
            </footer>
            </div>
    );
    }
}

export default HomePage;
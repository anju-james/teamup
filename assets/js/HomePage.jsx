import React from 'react'
import SearchBar from "./SearchBar";
import StudyGroupCard from "./StudyGroupCard";
import DepartmentCards from "./DepartmentCards";
import NavBar from './NavBar';
import {Link} from 'react-router-dom'



class HomePage extends React.Component {
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
                    <SearchBar/>
                </div>

                <div className="row">
                    <span className="col s11"><b>Popular study groups this week</b></span>
                    <Link to={"/seeall"} className="col s1 blue-text">See All</Link>
                    <div className="section">
                        <StudyGroupCard limit={3}/>
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
                    <div className="orange footer-copyright">
                        <div className="container">
                            CS5340 Project: Made by Anju James & Tushar Khandelwal
                        </div>
                    </div>
                </footer>
            </div>
    );
    }
}

export default HomePage;
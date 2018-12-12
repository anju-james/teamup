import React from 'react';
import StudyGroupCard from './StudyGroupCard';
import NavBar from './NavBar';


class SeeAll extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className=" container breadnav nav-wrapper section">
                    <div className="col s12">
                        <a href="#!" className="breadcrumb blue-text">Home</a>
                        <a href="#!" className="breadcrumb blue-text">All Study Groups</a>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="section">
                            <div className="card-content">
                                <span className="center card-title"><h4 className="orange-text">Group Study events registered in TeamUp</h4></span>
                            </div>
                            <div className="row">
                                <div className="card-content section col-s4">
                                    <StudyGroupCard limit={-1}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeeAll;
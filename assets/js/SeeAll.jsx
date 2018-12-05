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
                <div className="container">
                    <div class="row">
                        <div class="card">
                            <div class="card-content">
                                <span class="center card-title">Group Study events registered in TeamUp</span>
                            </div>
                            <div className="row">
                                <div class="card-content section col-s4">
                                    <StudyGroupCard/>
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
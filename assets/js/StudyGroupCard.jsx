import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";


class StudyGroupCardView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row ">
                {this.props.study_groups.map((group) =>
                    <div key={group.id} className="col s4">
                        <SmallCard key={group.id} group_id={group.id} title={group.title} content={group.description}/>
                    </div>)
                }
            </div>
        );
    }
}

class SmallCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 ">
                    <div className="card m7">
                        <div className="card-title center-align">
                            <span className=" light-blue-text text-darken-3"><b>{this.props.title}</b></span>
                        </div>
                        <div className="card-content light-blue lighten-5">
                            <p>{this.props.content}</p>

                        </div>
                        <div className="card-action hoverable center-align">
                            <Link className="orange-text text-accent-4" to={"/group_details/" + this.props.group_id}>See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {study_groups: state.study_groups}
}

const StudyGroupCard = connect(mapStateToProps)(StudyGroupCardView);

export default StudyGroupCard;
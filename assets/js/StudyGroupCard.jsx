import React from 'react'
``
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import SmallCard from './SmallCard'

class StudyGroupCardView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let selected_study_groups = []
        if (this.props.limit == -1) {
            selected_study_groups = this.props.study_groups;
        } else {
            selected_study_groups = this.props.study_groups.slice(0,this.props.limit)
        }
        return (
            <div className="row ">
                {selected_study_groups.map((group) =>
                    <div key={group.id} className="col s4">
                        <SmallCard key={group.id}
                                   group_id={group.id}
                                   title={group.title}
                                   content={group.description}
                                   date={group.date}
                                   time={group.time}/>
                    </div>)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {study_groups: state.study_groups}
}

const StudyGroupCard = connect(mapStateToProps)(StudyGroupCardView);

export default StudyGroupCard;
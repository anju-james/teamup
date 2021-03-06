import Blockies from 'react-blockies';
import React from 'react';
import {connect} from "react-redux";
import ReactTooltip from 'react-tooltip'


class AvatarView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let attendees = [];
        if (this.props.group_id) {
            let groups = this.props.study_groups.filter(group => group.id == this.props.group_id);
            if (groups.length > 0) {
                attendees = groups[0].attendees;
            }
        }

        let blockies = attendees.map((username, index) =>
            <div className="col">
            <p data-tip={username}>
            <Blockies
            key = {index}
            seed={username}
            bgColor="black"
            color='white'
            className="identicon"/></p>
                <ReactTooltip/></div>
            );

        return (
            <div className="row">{blockies}</div>
        );
    }
}

const mapStateToProps = state => {
    return {study_groups: state.study_groups}
};

const Avatar = connect(mapStateToProps)(AvatarView);

export default Avatar;

import React from 'react';
import NavBar from "./NavBar";
import {Link, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import SmallCard from './SmallCard';

class MyAccountPageView extends React.Component {
    constructor(props) {
        super(props);
        let groups = this.props.study_groups;
        let registered_groups = [];
        if (this.props.user_info.username &&
            (this.props.user_info.username in this.props.user_registered_study_group_ids)) {
            registered_groups = groups.filter((group) =>
                this.props.user_registered_study_group_ids[this.props.user_info.username].includes(group.id));
        }
        this.state={groups_to_render: registered_groups, active_tab: 1};
    }

    componentDidMount() {
        let elems = document.querySelectorAll('.tabs');
        if (elems) {
            M.Tabs.init(elems, {})
        }
    }

    handleRegisteredClick(){
        let groups = this.props.study_groups;
        let registered_groups = []
        if (this.props.user_info.username &&
            (this.props.user_info.username in this.props.user_registered_study_group_ids)) {
            registered_groups = groups.filter((group) =>
                this.props.user_registered_study_group_ids[this.props.user_info.username].includes(group.id));
        }
        this.setState({groups_to_render : registered_groups, active_tab: 1})
    }

    handleCreatedClick() {
        let groups = this.props.study_groups;
        let created_groups = [];
        if (this.props.user_info.username &&
            (this.props.user_info.username in this.props.user_created_study_group_ids)) {
            created_groups = groups.filter((group) =>
                this.props.user_created_study_group_ids[this.props.user_info.username].includes(group.id));
        }
        this.setState({groups_to_render : created_groups, active_tab: 2})
    }

    handleInterestedClick() {
        let groups = this.props.study_groups;
        let interested_groups = [];
        if (this.props.user_info.username &&
            (this.props.user_info.username in this.props.user_interested_study_group_ids)) {
            interested_groups = groups.filter((group) =>
                this.props.user_interested_study_group_ids[this.props.user_info.username].includes(group.id));
        }
        this.setState({groups_to_render : interested_groups, active_tab: 3});
    }

    render() {

        if (!this.props.user_info.username) {
            return (<Redirect to='/'/>);
        }

        let groups_render = (<div className="row ">
            {this.state.groups_to_render.map((group) =>
                <div key={group.id} className="col s4">
                    <SmallCard key={group.id}
                               group_id={group.id}
                               title={group.title}
                               content={group.description}
                               date={group.date}
                               time={group.time}/>
                </div>)
            }
        </div>);

        return (
            <div>
                <NavBar/>
                <div className="container col s12">
                    <div className="divider"></div>
                    <div className="col s12 offset-s5">
                        <h4 className=" offset s2  header  orange-text">My Study Groups</h4>

                        <div className="section">
                            <div className= "row">
                                <div className= "col s12">
                                    <ul className= "tabs">
                                        <li className= "tab col s3"><a
                                            className= {this.state.active_tab == 1 ? "active": ""}
                                            href = "#joined"
                                            onClick={(e) => this.handleRegisteredClick(e)}>Joined Groups</a></li>
                                        <li className= "tab col s3"><a
                                            className= {this.state.active_tab == 2 ? "active": ""}
                                            href = "#created"
                                            onClick={(e) => this.handleCreatedClick(e)}>Created Groups</a></li>
                                        <li className= "tab col s3"><a
                                            className= {this.state.active_tab == 3 ? "active": ""}
                                            href = "#interested"
                                            onClick={(e) => this.handleInterestedClick(e)}>Interested Groups</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    {groups_render}
                </div>
            </div>);
    }
}

const mapStateToProps = state => {
    return {user_registered_study_group_ids:state.user_registered_study_group_ids,
        user_created_study_group_ids:state.user_created_study_group_ids,
        user_interested_study_group_ids:state.user_interested_study_group_ids,
        user_info: state.user_info,
        study_groups:state.study_groups}
}

const MyAccountPage = connect(mapStateToProps)(MyAccountPageView);
export default MyAccountPage;



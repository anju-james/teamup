import React from 'react';
import {ToastContainer, toast, Flip} from 'react-toastify';
import {Redirect} from 'react-router-dom';
import store, {USER_JOIN_GROUP, USER_LEAVE_GROUP, USER_MARK_GROUP_INTEREST, USER_MARK_UNINTERESTED} from './store';
import {connect} from "react-redux";
import NavBar from './NavBar';


class DetailCardView extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickJoin(group_id) {
        if (this.props.user_info.username) {
            toast.success("You have joined this study group!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_JOIN_GROUP, group_id: group_id, fullname: this.props.user_info.fullname})
        } else {
            toast.warn("Login before you can join a group");
        }
    }

    handleClickLeave(group_id) {
        if (this.props.user_info.username) {
            toast.warn("You have left this study group!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_LEAVE_GROUP, group_id: group_id, fullname: this.props.user_info.fullname})
        } else {
            toast.warn("Login before you can leave a group");
        }
    }

    handleInterestedClick(group_id){
        if(this.props.user_info.username){
            toast.success("Group added to Interested Groups", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            store.dispatch({type: USER_MARK_GROUP_INTEREST, group_id: group_id, fullname: this.props.user_info.fullname})
        }else{
            toast.warn("Login to mark group Interested");
        }
    }

    handleNotInterestedCLick(group_id){
        if(this.props.user_info.username){
            toast.warn("Group removed from Interested Groups", {
                position: toast.POSITION.BOTTOM_LEFT
            });
            store.dispatch({type: USER_MARK_UNINTERESTED, group_id: group_id, fullname: this.props.user_info.fullname})
        }else{
            toast.warn("Login to remove group from Interested groups");
        }
    }

    renderActionButton(user_already_joined, matching_group) {
        if (user_already_joined) {
            return (<div className=" center-align">
                <button onClick={(e) => this.handleClickLeave(matching_group.id, e)}
                        className="waves-effect black-text waves-light btn yellow lighten-1">
                    Leave Study Group
                </button>
                <ToastContainer
                    transition={Flip}
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange={false}
                    draggable={false}
                    pauseOnHover={false}
                />
            </div>);
        } else {
            return (<div className=" center-align">
                <button onClick={(e) => this.handleClickJoin(matching_group.id, e)}
                        className="waves-effect waves-light btn green lighten-1">
                    Join Study Group
                </button>
                <ToastContainer
                    transition={Flip}
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange={false}
                    draggable={false}
                    pauseOnHover={false}
                />
            </div>);
        }
    }

    render() {
        if (!this.props.match.params.group_id) {
            return (<Redirect to='/'/>);
        }
        const group_id = parseInt(this.props.match.params.group_id, 10);
        let user_already_joined = false;

        let matching_group = this.props.study_groups.find((group) => group.id == group_id);
        if (!matching_group) {
            return (<Redirect to='/'/>);
        }

        if (matching_group.attendees.includes(this.props.user_info.username)) {
            user_already_joined = true;
        }

        let action_buttons = this.renderActionButton(user_already_joined, matching_group);

        return (
            <div>

                <NavBar/>

                <div className="container">
                    <div className="breadnav section">
                        <div className="col s12">
                            <a href="#!" className="breadcrumb blue-text">Home</a>
                            <a href="#!" className="breadcrumb blue-text">Group Study Details</a>
                        </div>
                    </div>
                    <div className=" col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s8">
                                        <div className="card-title align-left">
                                            <b>{matching_group.title}</b>
                                        </div>
                                        <b>Host:</b> {matching_group.hostname}, Majoring {matching_group.department}.
                                    </div>
                                    <div className="col s4">
                                        <div className="right-align">
                                            <b>Are you Interested?</b>
                                        </div>
                                        <div className="right">
                                            <button className="waves-effect waves-light btn hoverable grey lighten-3 left"
                                                    onClick={(e) => this.handleNotInterestedCLick(matching_group.id)}>
                                                <i className="col s1 offset-s1 material-icons red-text">close</i></button>
                                        </div>
                                        <div className="right">
                                            <button className="waves-effect waves-light btn grey lighten-3 hoverable left"
                                                    onClick={(e) => this.handleInterestedClick(matching_group.id)}>
                                                <i className="col s1 offset-s1 material-icons green-text text-darken-4">check</i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>

                            <div className="card-content">
                                <p><b>Details</b></p>
                                <p>CourseID: {matching_group.course} </p>
                                <p>{matching_group.description}</p>
                                <br></br>
                                <i className="material-icons blue-text prefix">date_range</i>
                                <span>   {matching_group.date}</span>
                                <br></br>
                                <i className="material-icons blue-text prefix">access_time</i>
                                <span>   {matching_group.time}</span>
                                <br></br>
                                <i className="material-icons blue-text prefix">location_on</i>
                                <span>   {matching_group.location}</span>
                                <br></br>
                                {action_buttons}
                                <br></br>
                            </div>
                            <div className="card-action light-blue lighten-5">
                                <span><b>Attendees({matching_group.attendees.length})</b></span>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {study_groups: state.study_groups, user_info: state.user_info}
};

const DetailCard = connect(mapStateToProps)(DetailCardView);

export default DetailCard;
import React from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import store, {USER_JOIN_GROUP} from './store';
import {connect} from "react-redux";

class DetailCardView extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick(group_id) {
        if (this.props.user_info.username) {
            toast.success("You have joined this study group!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_JOIN_GROUP, group_id: group_id, fullname: this.props.user_info.fullname})
        } else {
            toast.warn("Login before you can join a group");
        }
    }

    render () {
        if (!this.props.match.params.group_id) {
            return (<Redirect to='/'/>);
        }
        const group_id = parseInt(this.props.match.params.group_id, 10);
        let matching_group = this.props.study_groups.find((group) => group.id == group_id)
        if (!matching_group) {
            return (<Redirect to='/'/>);
        }

        return (

                <div className=" col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <a className="col s2 btn-floating btn-large waves-effect waves-light blue lighten-2 prefix">16 Oct</a>
                                <span className="card-title col s6" id="suffix">
                                    <h4>{matching_group.title}</h4></span>
                                <div className="col s4">
                                    <span className="center"><b>Are you interested?</b></span>
                                    <br></br>
                                    <span>
                                        <button className="hoverable">
                                            <i className="col s1 offset-s1 material-icons blue-text">check</i></button>
                                        <button className="hoverable">
                                            <i className="col s1 offset-s1 material-icons red-text">close</i></button>
                                    </span>
                                </div>
                            </div>
                            <span><h6><b>Date: </b>{matching_group.date}, <b>Host: </b>{matching_group.hostname} {matching_group.course}</h6> </span>

                        </div>
                        <div className="card-content">
                            <p>{matching_group.description}</p>
                            <br></br>

                            <i className="material-icons prefix">access_time</i>
                            <span>   {matching_group.time}</span>
                            <br></br>
                            <i className="material-icons prefix">location_on</i>
                            <span>   {matching_group.location}</span>
                            <br></br>

                            <div className=" center-align">
                                <button onClick={(e) => this.handleClick(matching_group.id, e)} className="waves-effect waves-light btn green lighten-1">
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
                            </div>
                            <br></br>



                        </div>
                        <div className="card-action">
                            <span>Attendees({matching_group.attendees.length})</span>
                        </div>
                    </div>
                </div>

        );
    }

}
const mapStateToProps = state => {
    return {study_groups: state.study_groups, user_info: state.user_info}
};

const DetailCard = connect(mapStateToProps)(DetailCardView);

export default DetailCard;
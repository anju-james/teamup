import React from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';


class DetailCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            title:["HCI Quiz 2"],
            Date:["Tuesday, October 16th 2018"],
            Location:["320 Shillman Hall"],
            Time:["12.30 pm to 2.00 pm"],
            Details:["A study group for UI Design Patterns and Gestalt Principles. User Analysis time for projects also included."],
            HostName:["John Doe"],
            HostMajor:["MS CS"],
            Attendees:[1,2,3,4,5],
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        toast.success("You have joined this study group!", {
            position: toast.POSITION.TOP_RIGHT
        });

    }


    render () {
        return (

                <div className=" col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <a className="col s2 btn-floating btn-large waves-effect waves-light blue lighten-2 prefix">16 Oct</a>
                                <span className="card-title col s6" id="suffix">
                                    <h4>{this.state.title}</h4></span>
                                <div className="col s4">
                                    <span className="center"><b>Are you interested?</b></span>
                                    <br></br>
                                    <br></br>

                                    <span>
                                        <i className="col s2 offset-s1 material-icons blue ">check</i>
                                        <i className="col s2 material-icons red ">close</i>
                                    </span>
                                </div>
                            </div>
                            <span><h6><b>Date: </b>{this.state.Date}, <b>Host: </b>{this.state.HostName} {this.state.HostMajor}</h6></span>

                        </div>
                        <div className="card-content">
                            <p>{this.state.Details}</p>
                            <br></br>

                            <i className="material-icons prefix">access_time</i>
                            <span>   {this.state.Time}</span>
                            <br></br>
                            <i className="material-icons prefix">location_on</i>
                            <span>   {this.state.Location}</span>
                            <br></br>

                            <div className=" center-align">
                                <button onClick={this.handleClick} className="waves-effect waves-light btn green lighten-1">
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
                            <span>Attendees({this.state.Attendees.length})</span>
                        </div>
                    </div>
                </div>

        );
    }

}

export default DetailCard;
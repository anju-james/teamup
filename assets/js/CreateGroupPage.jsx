import React from 'react';
import NavBar from "./NavBar";

class CreateGroupPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        /*
        import moment from 'moment';
import {DatetimePicker} from 'rc-datetime-picker';

         */

        return (
            <div>
                <NavBar/>
                <br></br>
                <br></br>
                <h4 className=" offset s2 center header center orange-text">Create a new study community with
                    TeamUp</h4>
                <div className="col s12 offset-s6">
                    <h6 className="header center bold ">Fill up the form and Host a new group study</h6>
                </div>

                <div className="container">
                    <div className="card">
                        <form className="col s12">
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    What is your study topic? :
                                </div>
                                <div className="input-field ">
                                    <input placeholder="Study Topic" id="first_name" type="text"
                                           className="validate col s7"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Topic CourseID :
                                </div>
                                <div className="input-field col ">
                                    <select className="browser-default">
                                        <option value="" disabled selected>CourseID</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Department :
                                </div>
                                <div className="input-field col">
                                    <select className="browser-default">
                                        <option value="" disabled selected>Department</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Details about your study group:
                                </div>
                                <div className="input-field ">
                                    <input placeholder="Details" id="first_name" type="text"
                                           className="validate col s7"/>
                                    <input id="first_name" type="text"
                                           className="validate offset-s4 col s7"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Location for your study:
                                </div>
                                <div className="input-field prefix">
                                    <input placeholder="Location" id="first_name" type="text"
                                           className="validate col s7"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Choose Date and Time:
                                </div>
                                <div className="input-field prefix">
                                    <input placeholder="Date" type="date" className="datepicker col s7"/>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Start Time:
                                </div>
                                <div className="input-field prefix">
                                    <input placeholder="Time" type="text" className="col s7"/>
                                </div>
                            </div>

                            <div className="card-action hoverable center-align blue lighten-5">
                                <a className="waves-effect waves-teal btn-flat grey lighten-2 orange-text center">Cancel</a>
                                <a className="waves-effect waves-teal btn green lighten-1">Create</a>
                            </div>
                        </form>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>


                <footer className="page-footer orange footer-copyright">
                    <div className="footer-copyright">
                        <div className="container">
                            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">TeamUp
                            Crew!!!</a>
                        </div>
                    </div>
                </footer>

            </div>

        );
    }
}

export default CreateGroupPage;
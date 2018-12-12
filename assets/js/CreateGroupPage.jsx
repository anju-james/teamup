import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from "./NavBar";
import {ToastContainer, toast, Flip} from 'react-toastify';
import {connect} from "react-redux";
import store from "./store";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class CreateGroupPageView extends React.Component {
    constructor(props) {
        super(props);
        this.state={id: new Date().getMilliseconds(),
                    title: "",
                    date: "",
                    location: "",
                    time: "",
                    description: "",
                    hostname: "",
                    course: "",
                    department: "",
                    attendees: []
        };
        this.modalRef = null;
        this.setModalRef = element => {
            this.modalRef = element;
        };

        this.initializeModal = () => {
            if(this.modalRef) {
                let elems = document.querySelectorAll('.modal');
                let options = {
                    dismissible: true,
                    opacity: .5, // Opacity of modal background
                    inDuration: 300, // Transition in duration
                    outDuration: 200, // Transition out duration
                    startingTop: '4%', // Starting top style attribute
                    endingTop: '10%', // Ending top style attribute
                    ready: function(modal, trigger) {
                        alert("Ready");
                        console.log(modal, trigger);
                    },
                    complete: function() { alert('Closed'); }
                };
                let instances = M.Modal.init(elems, options);

            }
        }
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    componentDidMount(){
        this.initializeModal();
        let select_elems = document.querySelectorAll('select');
        if(select_elems){
            M.FormSelect.init(select_elems, {});
        }
        let date_picker = document.querySelectorAll('.datepicker');
        if (date_picker) {
            let options = {onSelect: (selected_date) => this.handleDateChange(selected_date)};
            M.Datepicker.init(date_picker, options);
        }
        let time_picker = document.querySelectorAll('.timepicker');
        if (time_picker) {
            let options = {onSelect: (hour,minutes) => this.handleTimeChange(hour, minutes)};
            M.Timepicker.init(time_picker, options);
        }
    }

    handleCancelClick() {
        if(this.props.user_info.username) {
            this.props.history.goBack();
        }
    }

    handleCreateClick(){
        if(this.props.user_info.username){
            let group = {
                id: this.state.id,
                title: this.state.title,
                date: this.state.date,
                location: this.state.location,
                time: this.state.time,
                description: this.state.description,
                hostname: this.props.user_info.username,
                course: this.state.course,
                department: this.state.department,
                attendees: [this.props.user_info.username]}

            store.dispatch({type: "USER_CREATE_GROUP", group: group})
            this.props.history.push("/group_details/" + this.state.id);
        }
    }

    handleFormCreate(event){

    }

    handleTitleInputChange(event){
    this.setState({title: event.target.value})
    }
    handleCourseInputChange(event){
    this.setState({course: event.target.value})
    }
    handleDepartmentChange(event){
    this.setState({department: event.target.value})
    }
    handleDescriptionChange(event){
    this.setState({description: event.target.value})
    }
    handleLocationChange(event){
    this.setState({location: event.target.value})
    }
    handleDateChange(selected_date){
        let date_picker = document.querySelectorAll('.datepicker');
        this.setState({date: M.Datepicker.getInstance(date_picker[0]).date.toDateString()})
    //this.setState({date: selected_date.toString()})
    }
    handleTimeChange(hour, minutes) {
        let time_picker = document.querySelectorAll('.timepicker');
        let instance = M.Timepicker.getInstance(time_picker[0])
        this.setState({time: '' + instance.hours + ':' + instance.minutes + ' ' + instance.amOrPm });
    //this.setState({time: '' + hour + ":" + minutes})
    }


    render() {
        let departments = this.props.department_categories;
        let courseids = this.props.study_groups.map((group) => group.course);

        if (!this.props.user_info.username) {
            return <Redirect to='/login'/>;
        }

        return (
            <div>
                <NavBar/>
                <br></br>
                <br></br>
                <div className=" container breadnav nav-wrapper section">
                    <div className="col s12">
                        <a href="#!" className="breadcrumb blue-text">Home</a>
                        <a href="#!" className="breadcrumb blue-text">Create Form</a>
                    </div>
                </div>

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
                                <div className="input-field col s7 ">
                                    <input placeholder="Study Topic"
                                           id="first_name"
                                           type="text"
                                           onChange={(e) => this.handleTitleInputChange(e)}
                                           value={this.state.title}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Topic CourseID :
                                </div>
                                <div className="input-field col ">
                                    <select className="grey lighten-3"
                                            defaultValue=""

                                            onChange={(e) => this.handleCourseInputChange(e)}>
                                        <option value="" disabled >CourseID</option>
                                        {courseids.map((course) => <option value={this.state.course}>{course}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Department :
                                </div>
                                <div className="input-field col">
                                    <select className="grey lighten-3"
                                            defaultValue=""
                                            onChange={(e) => this.handleDepartmentChange(e)}>
                                        <option value="" disabled >Department</option>
                                        {departments.map((department) => <option value={this.state.department}>{department}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Details about your study group:
                                </div>
                                <div className="input-field col s7 ">
                                    <textarea type="text"
                                              className="materialize-textarea"
                                              name="description"
                                              placeholder="Details"
                                              id="description"
                                              value={this.state.description}
                                              onChange={(e) => this.handleDescriptionChange(e)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Location for your study:
                                </div>
                                <div className="input-field prefix col s7">
                                    <input placeholder="Location"
                                           id="location"
                                           type="text"
                                           onChange={(e) => this.handleLocationChange(e)}
                                           value={this.state.location}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Date for study:
                                </div>
                                <div className="input-field prefix col s7">
                                    <input type="text"
                                           id="studydatepicker"
                                           placeholder="Date"
                                           className="datepicker" ref="datepicker_ref"
                                           onChange={(e) => this.handleDateChange(e)}
                                           value={this.state.date}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <br></br>
                                    Start Time:
                                </div>
                                <div className="col s7 input-field prefix">
                                    <input type="text"
                                           placeholder="Time"
                                           className="timepicker"
                                           value={this.state.time}/>
                                </div>
                            </div>

                            <div className="card-action hoverable center-align blue lighten-5">
                                <Link to="/" className="waves-effect waves-teal btn-flat grey lighten-2 orange-text center">Cancel</Link>
                                <button data-target="modal1" className="btn modal-trigger waves-effect waves-teal btn green lighten-1"
                                        href="#modal1" onClick={(e) => this.handleFormCreate(e)}>Create</button>
                                <div id="modal1" className="modal" ref={this.setModalRef}>
                                    <div className="modal-content">
                                        <h5>Create Study Group Confirmation</h5>
                                        <p className="blue-text">By clicking OK you are creating and publishing your study group.
                                            Please continue by clicking OK</p>
                                    </div>
                                    <div className="modal-footer">
                                        <a onClick={(e) => this.handleCancelClick(e)} className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                                        <a onClick={(e) => this.handleCreateClick(e)} className="modal-close waves-effect waves-teal btn green lighten-1">OK</a>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                </div>

                <footer className="page-footer orange footer-copyright">
                    <div className="orange footer-copyright">
                        <div className="container">
                            CS5340 Project: Made by Anju James & Tushar Khandelwal
                        </div>
                    </div>
                </footer>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {department_categories: state.department_categories,
        study_groups: state.study_groups,
        user_info: state.user_info}
};

const CreateGroupPage = connect(mapStateToProps)(CreateGroupPageView);
export default CreateGroupPage;
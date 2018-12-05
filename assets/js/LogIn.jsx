import React from 'react';
import { browserHistory } from 'react-router'
import store from './store';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'


class LogInView extends React.Component {
    constructor(props) {
        super(props);
        this.state={username: ""};
    }

    handleInputChange(event) {
        this.setState({username: event.target.value });
    }

    handleClick(){
        // do validations
        store.dispatch({type: "USER_LOGIN", username: this.state.username, fullname: this.state.username})
        this.props.history.goBack();
    }


    render() {
        if (this.props.user_info.username) {
            // already logged in
            this.props.history.goBack();
        }
        return (
            <div>
                <div>
                    <nav className="light-blue lighten-1" role="navigation">
                        <div className="nav-wrapper container ">
                            <Link to="/" id="logo-container" className="brand-logo">
                                <i className="large material-icons white-text">group</i>
                                TeamUp</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to={"/"} className="waves-effect waves-light btn-flat">Home</Link></li>
                            </ul>

                        </div>
                    </nav>
                </div>
                <br></br>
                <br></br>

                <div className="container">
                    <div className="row valign-wrapper">
                        <div className="col s6 offset-s3 valign">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center">Log In here...</span>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="username" onChange={(e) => this.handleInputChange(e)} type="text"
                                                   value={this.state.username} className="validate"/>
                                            <label htmlFor={"username"}>My Northeastern Username</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password"/>
                                            <label htmlFor={"password"}>My Northeastern Password</label>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <Link to="/" onClick={(e) =>this.handleClick(e)} username={this.state.username} className="orange waves-effect waves-light btn">Login</Link>
                                    </div>
                                </div>
                                <div className="card-action center blue lighten-5">
                                    <a onClick={(e) =>this.handleClick(e)} className="waves-effect waves-light btn-flat">Cancel</a>
                                    <Link to="/" className="waves-effect waves-light btn-flat">Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className=" offset s2 center header center orange-text">A group learning platform for Northeastern Students</h4>
                <div className="col s12 offset-s6">
                    <h6 className="header center bold ">Find your new study group today with TeamUp!</h6>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
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

const mapStateToProps = state => {
    return {user_info: state.user_info}
}

const LogIn = connect(mapStateToProps)(LogInView)
export default LogIn;
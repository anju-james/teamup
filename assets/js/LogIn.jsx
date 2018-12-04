import React from 'react';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div>
                    <nav className="light-blue lighten-1" role="navigation">
                        <div className="nav-wrapper container ">
                            <a href="/" id="logo-container" className="brand-logo">
                                <i className="large material-icons white-text">group</i>
                                TeamUp</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/" className="waves-effect waves-light btn-flat">Home</a></li>
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
                                            <input id="username" type="text" className="validate"/>
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
                                        <a href="#" className="orange waves-effect waves-light btn">Login</a>
                                    </div>
                                </div>
                                <div className="card-action center blue lighten-5">
                                    <a href="#" className="waves-effect waves-light btn-flat">Cancel</a>
                                    <a href="#" className="waves-effect waves-light btn-flat">Forgot Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className=" offset s2 center header center orange-text">A group learning platform for Northeastern Students</h4>
                <div className="col s12 offset-s6">
                    <h6 className="header center bold ">Find your new study group!</h6>
                </div>

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

export default LogIn;
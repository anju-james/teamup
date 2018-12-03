import React from 'react';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div>
                    <nav>
                        <div className="nav-wrapper light-blue lighten-1">
                            <a href="#" className="brand-logo center">TeamUp</a>

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
            </div>

                );
                }

                }

export default LogIn;
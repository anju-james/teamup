import React from 'react';

class LogIn extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Log In here</h4>
                    <p>Login using MyNEU username and password</p>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="username" type="username" class="validate"/>
                            <label htmlFor={"username"}>NEU Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" class="validate"/>
                            <label htmlFor={"password"}>NEU Password</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#" className="modal-close waves-effect waves-green btn-flat">Login</a>
                </div>
            </div>
        );
    }

}

export default LogIn;
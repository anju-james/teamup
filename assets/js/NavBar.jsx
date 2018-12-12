import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import store, {USER_LOGOUT} from './store';
import {connect} from "react-redux";
import {ToastContainer, toast, Flip} from 'react-toastify';

class NavBarView extends React.Component {
    constructor(props) {
        super(props);
    }

    signOut() {
        this.closeSideNav()
        if (this.props.user_info.username) {
            toast.warn("You have signed out!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_LOGOUT})
        }
    }

    componentDidMount(){
        let elem = document.querySelector('.sidenav');
        if(elem){
            M.Sidenav.init(elem);
        }
    }

    handleSidebarClick() {
        let elem = document.querySelector('.sidenav');
        let instance = M.Sidenav.getInstance(elem);
        if (instance.isOpen) {
            instance.close()
        } else {
            instance.open()
        }
    }

    handleCreateClick(event) {
        if(!this.props.user_info.username) {
            event.preventDefault();
            toast.warn("Login to Create a new Group Study", {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            this.closeSideNav();
        }
    }

    closeSideNav() {
        let elem = document.querySelector('.sidenav');
        let instance = M.Sidenav.getInstance(elem);
        if (instance.isOpen) {
            instance.close();
        }
    }

    render() {
        let login_status = null;
        let account_status = null;

        if(this.props.user_info.username){
            login_status = (<li>
                    <Link to={"/"}
                          onClick={(e) => this.signOut(e)}
                          className="waves-effect waves-light btn-flat">Sign Out</Link></li>
            );
            account_status = (<li>
                <Link to={"/myaccount"} onClick={(event) => this.closeSideNav()}
                      className="waves-effect waves-light btn-flat">My Account</Link></li>)

        }else {
            login_status = (<li><Link to={"/login"} onClick={(event) => this.closeSideNav()}
                                      className="waves-effect waves-light btn-flat">LogIn</Link></li>);
        }

        return (
            <header>
            <nav className="light-blue lighten-1" role="navigation">
                <div className=" nav-wrapper container ">
                    <Link to={"/"} id="logo-container"
                          className="brand-logo">
                        <i className="large material-icons white-text">group</i>
                        TeamUp</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/create" onClick={(event) => this.handleCreateClick(event)}
                                  id="download-button"
                                  className="waves-effect waves-light btn orange">Create a New Group</Link></li>
                        <li><Link to={"/"}
                                  className="waves-effect waves-light btn-flat">Home</Link></li>
                        {account_status}
                        {login_status}
                    </ul>
                    <ul id="nav-mobile" className="sidenav">
                        <li><Link to="/create" onClick={(event) => this.handleCreateClick(event)}
                                  id="download-button"
                                  className="waves-effect waves-light btn orange">Create a New Group</Link>
                        </li>
                        <li><Link to={"/"} onClick={(event) => this.closeSideNav()}
                                  className="waves-effect waves-light btn-flat">Home</Link></li>
                        {account_status}
                        {login_status}
                    </ul>
                    <ul className="left hide-on-large-only">
                        <a href="#" onClick={(event) => this.handleSidebarClick()} className="button-collapse"><i className="material-icons">menu</i></a>
                    </ul>

                </div>
            </nav>
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
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {user_info: state.user_info}
}

const NavBar = connect(mapStateToProps)(NavBarView);

export default NavBar;
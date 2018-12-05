import React from 'react'
import {Link} from 'react-router-dom'
import store, {USER_LOGOUT} from './store';
import {connect} from "react-redux";
import {ToastContainer, toast, Flip} from 'react-toastify';

class NavBarView extends React.Component {
    constructor(props) {
        super(props);

    }

    signOut() {
        if (this.props.user_info.username) {
            toast.warn("You have signed out!", {
                position: toast.POSITION.TOP_RIGHT
            });
            store.dispatch({type: USER_LOGOUT})
        }
    }

    render() {
        let login_status = null;

        if(this.props.user_info.username){
            login_status = (<li><Link to={"/"} onClick={(e) => this.signOut(e)} className="waves-effect waves-light btn-flat">Sign Out</Link></li>);
        }else {
            login_status = (<li><Link to={"/login"} className="waves-effect waves-light btn-flat">LogIn</Link></li>);
        }
        return (
            <header>
            <nav className="light-blue lighten-1" role="navigation">
                <div className=" nav-wrapper container ">
                    <Link to={"/"} id="logo-container" className="brand-logo">
                        <i className="large material-icons white-text">group</i>
                        TeamUp</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/create"} id="download-button" className="waves-effect waves-light btn orange">Create a New Group</Link></li>
                        <li><Link to={"/"} className="waves-effect waves-light btn-flat">Home</Link></li>
                        {login_status}
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

const NavBar = connect(mapStateToProps)(NavBarView)

export default NavBar;
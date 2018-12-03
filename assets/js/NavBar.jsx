import React from 'react'
import {Link} from 'react-router-dom'


class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

        render() {
        return (
            <header>
            <nav className="light-blue lighten-1" role="navigation">
                <div className=" nav-wrapper container ">
                    <a href="/" id="logo-container" className="brand-logo">TeamUp</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a id="download-button" className="waves-effect waves-light btn orange">Create a New Group</a></li>
                        <li><a href="/" className="waves-effect waves-light btn-flat">Home</a></li>
                        <li><Link to={"/login"} className="waves-effect waves-light btn-flat">Log In</Link></li>
                    </ul>
                </div>
            </nav>
            </header>
        );
    }
}

export default NavBar;
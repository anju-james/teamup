import React from 'react'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <nav class="light-blue lighten-1" role="navigation">
                <div class=" nav-wrapper container ">
                    <a href="/" id="logo-container" class="brand-logo">TeamUp</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a id="download-button" class="waves-effect waves-light btn orange">Create a New Group</a></li>
                        <li><a href="/" class="waves-effect waves-light">Home</a></li>
                        <li><a href="#" class="waves-effect waves-light">Log In</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar
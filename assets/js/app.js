// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import React from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import StudyGroupCard from './StudyGroupCard'
import DepartmentCards from './DepartmentCards'
import DetailCard from './DetailCard'
import Login from './LogIn';

function init() {

    let search = document.getElementById("searchbar");
    let studygroupcard = document.getElementById("studycard")
    let category = document.getElementById("category")
    let detail = document.getElementById("seemore")
    let login = document.getElementById("login")

    if(search && studygroupcard && category) {
        ReactDOM.render(<SearchBar />, search);
        ReactDOM.render(<StudyGroupCard/>, studygroupcard)
        ReactDOM.render(<DepartmentCards/>, category)
    }

    if(seemore) {
        ReactDOM.render(<DetailCard/>, seemore)
    }

    if(login) {
        ReactDOM.render(<Login/>, login)
    }
}

$(init);



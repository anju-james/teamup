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
import ReactDOM from 'react-dom'
import TeamUpSpa from './TeamUpSpa'
import store from './store';
import {Provider} from 'react-redux';


function init() {
    let app_root = document.getElementById("teamup_root");

    if(app_root) {
        ReactDOM.render(<Provider store={store}>
            <TeamUpSpa /></Provider>, app_root);
    }
}

$(init);



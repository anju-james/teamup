import React from 'react'
import SearchAreaAlone from "./SearchAreaAlone";
import NavBar from "./NavBar";
import {Link} from 'react-router-dom'


class NoResults extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div>
                <NavBar/>
                <div className="container">
                    <div>
                        <SearchAreaAlone/>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <h6 className="header center bold">Sorry we have no results matching your search. Search Again</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 ">
                            <h6 className="center-align bold ">OR</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <Link to={"/create"} id="download-button" className="waves-effect waves-light btn orange">Create a New Group</Link>
                        </div>
                    </div>

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>

                <br></br>
                <br></br>
                <br></br>
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
                            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">TeamUp Crew!!!</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default NoResults;
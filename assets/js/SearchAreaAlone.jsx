import React from 'react'

class SearchAreaAlone extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
            <br></br>
                <form className="row valign-wrapper ">
                    <div className="col s12 valign">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">search</i>
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Search here for a Study group</label>
                            <span className="helper-text">Search by Department Name, CourseID or Topic</span>
                        </div>
                        <div className="input-field col s2">
                            <a id="suffix download-button" className="waves-effect waves-light btn blue">Search</a>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchAreaAlone;
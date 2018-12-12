import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

class SmallCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 ">
                    <div className="card small m7">
                        <div className="card-content">
                            <span className="card-title light-blue-text text-darken-3"><b>{this.props.title}</b></span>
                            <br></br>
                            <h7 className=" text-blue">{this.props.content}</h7>
                            <div>
                                <br></br>
                                <i className="material-icons left-align blue-grey-text">date_range</i>
                                <span className="left-align">{this.props.date} </span>
                                <br></br>
                                <i className="material-icons left-align blue-grey-text">access_time</i>
                                <span className="left-align">{this.props.time} </span>
                            </div>

                        </div>
                        <div className="card-action light-blue lighten-5 hoverable center-align">
                            <Link className="orange-text text-accent-4" to={"/group_details/" + this.props.group_id}>See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmallCard;
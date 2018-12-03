import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'


class StudyGroupCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:["HCI Quiz 2", "Algorithms Exam Prep", "Anthropology Discussion"],
            content: ["A study group for UI Design Patterns and Gestalt Principles. User Analysis time for projects also included.",
            "Prepare for Algorithms Final Exam by practising Dynamic Programing and Greedy Algorithms.",
            "A discussion group to analyse meaning and relevance of public space."],

        }

    }

    renderCard(i){
        return <SmallCard title={this.state.title[i]}
                          content={this.state.content[i]}/>

    }

    render() {
            return (
                <div className="row ">

                <div className="col s4">
                    {this.renderCard(0)}
                </div>
                <div className="col s4">
                    {this.renderCard(1)}
                </div>
                <div className="col s4">
                    {this.renderCard(2)}
                </div>

            </div>
        );
    }
}

class SmallCard extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col s12 ">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{this.props.title}</span>
                        </div>
                        <div className="card-content light-blue lighten-5">
                            <p>{this.props.content}</p>
                        </div>
                        <div className="card-action center-align">
                            <Link to="/study_detail">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyGroupCard;
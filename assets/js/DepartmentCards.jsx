import React from 'react'

class DepartmentCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ["Computer Science", "Architecture", "Humanities", "History", "Music", "Human Development", "Communication", "Development Sociology"]
        }
    }

    renderDepCard(i) {
        return<Department name={this.state.name[i]}/>
    }

    render() {
        return(
            <div class="row ">

                <div class="col s3">
                    {this.renderDepCard(0)}
                </div>
                <div class="col s3">
                    {this.renderDepCard(1)}
                </div>
                <div class="col s3">
                    {this.renderDepCard(2)}
                </div>
                <div class="col s3">
                    {this.renderDepCard(3)}
                </div>
                <div class="col s3">
                    {this.renderDepCard(4)}
                </div>
                <div class="col s3">
                    {this.renderDepCard(5)}
                </div>
                <div class="col s3">
                    {this.renderDepCard(6)}
                </div>
                <div class="col s3">
                    {this.renderDepCard(7)}
                </div>
            </div>
        );
    }


}


class Department extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="department-card center-align light-blue accent-1 hoverable">
                        <div className="card-title">
                            <div className="card-content">
                                <br></br>
                                <div className="center-align">
                                    <h7><b>{this.props.name}</b></h7>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DepartmentCards;
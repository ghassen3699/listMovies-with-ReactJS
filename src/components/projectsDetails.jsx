import React, { Component} from 'react';


export default class ProjectsDetails extends Component {
    render(){
        return(
            <div>
                project detail number {this.props.match.params.id}
            </div>
        )}
}
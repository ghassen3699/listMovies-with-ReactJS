import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Projects extends Component {
    state  = {
        projects : [
            {id:1, name:"project 1"},
            {id:2, name:"project 2"},
            {id:3, name:"project 3"},
        ]
    }
    render(){
        return (
            <div>
                <h1>Projects Page</h1>
                <ul>
                    {this.state.projects.map(project =>
                        <li key={project.id}>
                            <Link to={"/projects/"+project.id}>{project.name}  </Link>
                        </li>
                    )}
                </ul>
            </div>
        )}
}

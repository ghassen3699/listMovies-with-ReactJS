import React, { Component} from 'react';
import Like from "./like";

export default class Movie extends Component {


    render(){
        return(
            <tr key={this.props.filmData._id}>
                <th>{this.props.filmData.title}</th>
                <td>{this.props.filmData.genre.name}</td>
                <td>{this.props.filmData.numberInStock}</td>
                <td>{this.props.filmData.publishDate}</td>
                <td><button onClick={()=>this.props.deleteMovie(this.props.filmData)}>Delete</button></td>
                <td>
                    <Like like={this.props.like} movie={this.props.filmData} />
                </td>
            </tr>
        )}
};
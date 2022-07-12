import React, { Component} from 'react';


export default class Like extends Component {
    formatLikeButton(likeType){
        if (likeType === true){
            const classType="fa fa-heart"
            return classType
        }else {
            const classType="fa fa-heart-o"
            return classType
        }
    }

    render(){
        return(
            <i
                className={this.formatLikeButton(this.props.movie.liked)}
                aria-hidden="true"
                onClick={()=>{this.props.like(this.props.movie)}}

            />
        )
    }
}
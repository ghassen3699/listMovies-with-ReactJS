import React, { Component} from 'react';


const SingleMovle = (props) => {
    return <div>
        movie id number {props.match.params.id}
    </div>
}

export default SingleMovle ;
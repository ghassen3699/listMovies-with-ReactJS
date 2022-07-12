import React, { Component} from 'react';


export default class Counter extends Component {

    render(){
        return (
            <div>

                <p>Counter </p>


                <p>{this.props.formatCount(this.props.counterData.value)} </p>
                <button onClick={()=>{
                    this.props.increment(this.props.counterData)
                }}>Increment</button>


                <button onClick={()=>{
                    this.props.decrement(this.props.counterData)
                }}>Decrement</button>


                <button onClick={()=>{
                    this.props.reset(this.props.counterData)
                }}>Reset</button>

            </div>
        )

    }
};
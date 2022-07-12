import React, { Component} from 'react';
import Counter from './counter'

export default class Counters extends Component {
    state  = {
        counters: [
            {id:1, value:0},
            {id:2, value:1},
            {id:3, value:2},
            {id:4, value:3},
        ],
    }
    // increment button
    handleIncrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({counters:counters})
    }

    // Decrement button
    handleDecrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        if (counters[index].value <= 0){
            counters[index].value = 0
        }else {
            counters[index].value --
        }
        this.setState({counters:counters})
    }

    handleReset = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value = 0
        this.setState({counters:counters})
    }

    // format of counter result
    formatCount(number){
        if (number === 0){
            return "Zero"
        }
        return number
    }

    render(){
        return (
            <div>
                {this.state.counters.map(counter=>{
                    return <Counter
                        key={counter.id}
                        counterData={counter}
                        increment={this.handleIncrement}
                        decrement={this.handleDecrement}
                        reset={this.handleReset}
                        formatCount={this.formatCount}
                    />
                })}

            </div>
        )
    }
}
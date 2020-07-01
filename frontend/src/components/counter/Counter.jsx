import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            // secondCounter: 100
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return ( 
            <div>
                <div className = "flex-counter">
                    <span>
                        <h2>COUNTER</h2>
                    </span>
                    <CounterButton  incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <span className="count">{this.state.counter}</span>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }

    increment(by) { // Update the state
        //console.log(`increment from Parent - ${by}`);
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        )
    }

    reset() {
        this.setState(
            {counter: 0}
        )
    }
}
 

class CounterButton extends Component {
    // Define initial state in constructor
    // state => counter =0
    // constructor() {
    //     super();

    //     // this.state = {
    //     //     counter: 0,
    //     //     // secondCounter: 100
    //     // }

    //     // this.increment = this.increment.bind(this);
    //     // this.decrement = this.decrement.bind(this);
    //     // Using an Arrow function you do not have to bind()
    // }

    render() {
       // render = () => {}
        return (
            //<div className="flex-counter">
                <span>
                    <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                    <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                </span>
            //</div>
        )
    }

    // increment() { // Update the state
    //     // increment = () => {}
    //     // console.log('increment');
    //     this.setState(
    //         (prevState) => {
    //             return {counter: prevState.counter + this.props.by}
    //         }
    //     )

    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement() {
    //     this.setState(
    //         (prevState) => {
    //             return {counter: prevState.counter - this.props.by}
    //         }
    //     )

    //     this.props.decrementMethod(this.props.by);
    // }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;
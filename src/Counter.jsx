import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:
            this.setState({
                keyToChange: valueToChangeTo
            });
        */
            this.setState({
                keyToChange: valueToChangeTo
            });
    }
  
    render() {
        return (
            <div className="counter">
                /*TODO (Counter): display the value of count*/
                <h1>{this.state.count}</h1>
                /*TODO (Counter): add a button that calls incrementCount() when clicked*/
            </div>
        );
    }
}

export default Counter;
import React from "react";
import Button from "../Button/Button";

export class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: props.count ?? 0
        }
    }
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    decrement = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }

    render() {
        return <div>
            <h4>Count: {this.state.count}</h4>
            <div style={{display: "flex", gap:"10px"}}>
                <Button type="filled" onClick={this.increment}>+</Button>
                <Button type="filled" onClick={this.decrement}>-</Button>
            </div>
        </div>
    }
}
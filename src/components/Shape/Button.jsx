import React, { Component } from 'react'
import '../../Styles/Shape.scss';

export default class Button extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
            width: 250,
            height: 150,
            array: [1,2,3,4],
        };
    }

    

    onHover(event){
        console.log("onHover!!");
        console.log("X: ", event.clientX);
        console.log("Y : ", event.clientY);
        //this.setState((state, props) => { return { array: [2,2,2,2] }})
    }

    render() {
        var element = <div className="shape" onMouseEnter={this.onHover}>{this.state.array}</div>
        return (
            <div>
                {element}
            </div>
        );
    }
}

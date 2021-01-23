import React, { Component } from 'react'
import '../../Styles/Shape.scss';

export default class Button extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
            width: 100,
            height: 100,
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
        var element = <div className="shape" style={this.buttonstyle} onMouseEnter={this.onHover}>{this.state.array[0]}</div>
        return (
            <div>
                {element}
            </div>
        );
    }
}

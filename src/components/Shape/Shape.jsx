import React, { Component } from 'react'
import './../../Styles/Shape.scss';

export default class Shape extends Component {
    
    state = {};

    constructor(props) {
        super(props)
        //console.log("constructor...");
        //console.log("const props.shape: ", this.props.shape);
        this.state = {
             shape: props.shape,
             text: "rect",
             element: <div className="btn rect unselectable" onClick={this.handleClick}>button</div>
        }
    }
    
    componentDidMount() {
        //console.log("did mount..");
        this.setState((state, props) => { return {  }})
    }

    handleClick = () => {
        if(this.state.shape !== "rect"){
            this.setState((state) => { return { 
                shape: "rect", 
                text: "rect",
                element: <div className="btn rect unselectable" onClick={this.handleClick}>{this.state.text}</div>
            }});
        } else {
            this.setState((state) => { return { 
                shape: "circle",
                text: "circle",
                element: <div className="btn circle unselectable" onClick={this.handleClick}>{this.state.text}</div>
            }});
        }
    } 
    
    render() {
        //console.log("render() -state- Shape: ", this.state.shape);
        //console.log("render() -state- Text: ", this.state.text);
        return (
            <div>
                {this.state.element}
            </div>
        )
    }
}

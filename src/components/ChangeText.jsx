import React, { Component } from 'react'

export default class ChangeText extends Component {
    
    state = {};

    constructor(props) {
        super(props)
        this.state = {
             text: "Hello!"
        }
    }
    
    componentDidMount() {
        console.log("hello".localeCompare("hello"));
    }

    handleClick = () => {
        if(this.state.text() !== "Hello!"){
            this.setState((state) => { return { text: "Hello!"}});    
        } else {
            this.setState((state) => { return { text: "Changed!"}});
        }
    }
    
    render() {
        return (
            <div>
                <p onClick={this.handleClick}>{this.state.text}</p>                
            </div>
        )
    }
}

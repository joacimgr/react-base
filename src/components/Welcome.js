import React from 'react';

class Welcome extends React.Component {
 
    render() {
         
        return <div>
            <p>Hello, {this.props.name}</p>
            </div>;
        }

}
export default Welcome;
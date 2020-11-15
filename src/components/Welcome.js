import React from 'react';
import publicIp from 'react-public-ip';

class Welcome extends React.Component {
 
    render() {
         
        return <div>
            <p>Hello, {this.props.name}</p>
            </div>;
        }

}
export default Welcome;
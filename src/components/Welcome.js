import React from 'react';
import publicIp from 'react-public-ip';

class Welcome extends React.Component {
    constructor(props){
        super(props);
        var valueIP = "";
    }

    componentDidMount(){
        this.forceUpdate();
    }
    
    async getIp(){
        var ipv4 = await publicIp.v4() || "";
        console.log("ipv4 = ", ipv4);
        return ipv4;
    }
    
    render() {
        try{
            this.getIp().then(ip => {
                this.value = ip;
                console.log("inside getip: ", "value: ", this.value, "ip: ", ip);
                if(this.value != null){
                    this.forceUpdate();
                }
            })
        } catch (err){
            console.error(err);
        }
         
        console.log("value: ", this.value, "ip: ", this.value)
        return <div>
            <p>Hello, {this.props.name}</p>
            <p>your IP is: {this.value}</p> 
            </div>;
        }

}
export default Welcome;
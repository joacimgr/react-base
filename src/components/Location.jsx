import React, { Component } from 'react'

export class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            available: <p>false...</p>,
            lat: "60",
            lon: "18",
            location: "unavailiable"
        }
    }
    
    componentDidMount() {
        
        /*if ("geolocation" in navigator) {
            console.log("Available");
            this.setState((state, props) => { return { available: <p>true.</p> }})
            
        } else {
            console.log("Not Available");
            this.setState((state, props) => { return { available: <p>false.</p> }})
        }
        
        var positionRes = "null";
        var posse = navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            positionRes = position.coords.latitude;
            positionRes += "," + position.coords.longitude;
            console.log("posres: ", positionRes);
            //this.setState((state) => { return { lat : position.coords.latitude, lon: position.coords.longitude }})
            return positionRes;
          }, function(error) {
              console.log("Error on getCurrentPosition", error.message);
          });

          console.log("position from call : ", posse);
          this.makeLocationCall(this.state.lon, this.state.lat);*/
    }
    
    makeLocationCall(lat, lon){
       /* // read all entities
        
        var baseurl = "http://open.mapquestapi.com/geocoding/v1/reverse";
        var finalurl = baseurl + "?location=" + lon + "," + lat + "&" +
        "key=A6oRhWaAFuzGS49zmdpht4CGRRxA8AEA&includeRoadMetadata=true&includeNearestIntersection=true";
        var positionRes = "null";
        fetch(navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            positionRes = position.coords.latitude;
            positionRes += "," + position.coords.longitude;
            console.log("posres: ", positionRes);
            //this.setState((state) => { return { lat : position.coords.latitude, lon: position.coords.longitude }})
            return positionRes;
          }, function(error) {
              console.log("Error on getCurrentPosition", error.message);
          })).then((position) => {  
            var response = new Response(position.body);
            console.log("position in makeLocCall : ", position);
            //var body = JSON.parse(position.body.adminArea5);
            console.log("body : ", response.text());
        });
        fetch(finalurl, {
            "method": "GET",
            "headers": {
                 
            }
        })

        .then(response => response.json())
        .then(response => {
            console.log("jsonparse : ", response.results[0].locations[0].adminArea5);
            this.setState({
            location: response.results[0].locations[0].adminArea5
            })
            console.log("response location: ", response.results[0].locations[0].adminArea5);
        })
        .catch(err => { console.log("Error: ", err); 
        });*/
    }

    render() {
        
        return (
            <div>
                {this.state.location}
            </div>
        )
    }
}

export default Location

import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date(), 
            week: this.getWeek(),
            date: this.getDate()
        };
    }

    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getWeek() {
        let now = new Date();
        let onejan = new Date(now.getFullYear(), 0, 1);
        return Math.ceil( (((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7 );
    }

    getDate() {
        let date = new Date().getUTCDate() + "/" + (new Date().getUTCMonth()+1);
        return date;
    }

    tick() {
        let week = this.getWeek();
        let date = this.getDate();
        this.setState({
            time: new Date(),
            week: week,
            date: date
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                <h4>{this.state.date}</h4>
                
                <h5><span>week: </span>{this.state.week}</h5>
            </div>
        )
    }
}
export default Clock;
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
        // Copy date so don't modify original
        var d = new Date();
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        // Return array of year and week number
        return weekNo;
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
                <h3>{this.state.week}</h3>
            </div>
        )
    }
}
export default Clock;
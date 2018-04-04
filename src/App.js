import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        startDate: "",
        numberDays: 0,
        countryCode: ""
    };

    onStartDateChange = evt => {
        this.setState({
            startDate: evt.currentTarget.value
        });
    };

    onNumberOfDayChange = evt => {
        this.setState({
            numberDays: evt.currentTarget.value
        });
    };

    onCountryCodeChange = evt => {
        this.setState({
            countryCode: evt.currentTarget.value
        });
    };

    render() {
        return (
            <div className="app">
                <div className="requirement__field">
                    <label>Start Date: </label>
                    <input type="date" onChange={this.onStartDateChange} />
                </div>
                <div className="requirement__field">
                    <label>Number of days: </label>
                    <input type="number" onChange={this.onNumberOfDayChange} />
                </div>
                <div className="requirement__field">
                    <label>Country Code: </label>
                    <input type="text" onChange={this.onCountryCodeChange} />
                </div>
            </div>
        );
    }
}

export default App;

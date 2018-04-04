import React, { Component } from "react";
import "./App.css";
import Month from "./Month";

const test = [
    {
        number: 7,
        year: 2008,
        weeks: [
            [
                {
                    dayOfTheWeek: 5,
                    day: 15
                },
                {
                    dayOfTheWeek: 6,
                    day: 16
                }
            ],
            [
                {
                    dayOfTheWeek: 0,
                    day: 17
                },
                {
                    dayOfTheWeek: 1,
                    day: 18
                },
                {
                    dayOfTheWeek: 2,
                    day: 19
                },
                {
                    dayOfTheWeek: 3,
                    day: 20
                },
                {
                    dayOfTheWeek: 4,
                    day: 21
                },
                {
                    dayOfTheWeek: 5,
                    day: 22
                },
                {
                    dayOfTheWeek: 6,
                    day: 23
                }
            ]
        ]
    }
];

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
                <div>
                    <Month month={test[0]} />
                </div>
            </div>
        );
    }
}

export default App;

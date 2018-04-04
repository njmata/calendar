import React, { Component } from "react";
import "./App.css";
import Calendar from "./Calendar";

class App extends Component {
    state = {
        startDate: "",
        numberDays: 0,
        countryCode: "",
        months: []
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

    onCreateCalendar = () => {
        let currentDate = new Date(this.state.startDate);
        const endDate = new Date(this.state.startDate);
        endDate.setDate(endDate.getDate() + Number(this.state.numberDays));

        const months = [];
        let currentWeek = [];
        let currentMonthNumber = currentDate.getMonth();
        let currentMonth = {
            number: currentMonthNumber,
            year: currentDate.getFullYear(),
            weeks: []
        };
        while (currentDate < endDate) {
            // Use UTC day to ensure that it is the same in all location
            const currentDayOfTheWeek = currentDate.getUTCDay();
            currentWeek.push({
                dayOfTheWeek: currentDayOfTheWeek,
                day: currentDate.getUTCDate()
            });

            // Added one day to the current day
            currentDate.setDate(currentDate.getDate() + 1);
            if (currentDate.getUTCMonth() !== currentMonthNumber) {
                currentMonth.weeks.push(currentWeek);
                months.push(currentMonth);
                currentMonthNumber = currentDate.getUTCMonth();
                currentMonth = {
                    number: currentMonthNumber,
                    year: currentDate.getUTCFullYear(),
                    weeks: []
                };
                currentWeek = [];
            } else if (currentDate.getUTCDay() < currentDayOfTheWeek) {
                // if the new day of the week is less that the current day of the week is means that a new week is started.
                currentMonth.weeks.push(currentWeek);
                currentWeek = [];
            }
        }

        if (currentWeek.length > 0) {
            currentMonth.weeks.push(currentWeek);
        }

        months.push(currentMonth);
        this.setState({ months });
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
                    <button type="button" onClick={this.onCreateCalendar}>
                        Make a calendar
                    </button>
                </div>
                <Calendar months={this.state.months} />
            </div>
        );
    }
}

export default App;

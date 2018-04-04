import React, { PureComponent } from "react";
import "./App.css";
import Week from "./Week";

/*
    Expected the following object
    month: {
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
            ]
        ]
    }
*/

const DaysOfTheWeek = props => <div className="day__name">{props.text}</div>;
export default class MonthComponent extends PureComponent {
    dayOfTheWeek = ["S", "M", "T", "W", "T", "F", "S"];
    monthsName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    render() {
        const { month } = this.props;
        const daysOfTheWeek = this.dayOfTheWeek.map((day, index) => (
            <DaysOfTheWeek text={day} key={index} />
        ));
        const weeks = month.weeks.map((week, index) => (
            <Week week={week} key={index} />
        ));
        return (
            <div className="calendar__month">
                <div className="calendar__month_weeks">{daysOfTheWeek}</div>
                <div className="calendar__month_title">
                    <h5>
                        {this.monthsName[month.number]} {month.year}
                    </h5>
                </div>
                {weeks}
            </div>
        );
    }
}

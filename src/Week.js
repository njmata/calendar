import React, { PureComponent } from "react";
import "./App.css";
import Day from "./Day";

/**
 * Expected an array with the following form:
 * week: [
        {
            dayOfTheWeek: 5,
            day: 15
        },
        {
            dayOfTheWeek: 6,
            day: 16
        }
    ]
 */

export default class WeekComponent extends PureComponent {
    render() {
        const { week } = this.props;
        if (week.length === 0) return null;
        const daysArray = [];
        // find the days represents in the array and fill the day information
        for (let i = 0; i < 7; i++) {
            var index = week.findIndex(day => day.dayOfTheWeek === i);
            if (index === -1) {
                daysArray.push(<Day key={i} />);
            } else {
                daysArray.push(
                    <Day
                        dayOfTheWeek={week[index].dayOfTheWeek}
                        text={week[index].day}
                        key={i}
                    />
                );
            }
        }

        return <div className="calendar__month_weeks">{daysArray}</div>;
    }
}

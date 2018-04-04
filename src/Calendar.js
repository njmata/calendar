import React from "react";
import Month from "./Month";

const Calendar = props => {
    if (props.months.length === 0) {
        return null;
    } else {
        const months = props.months.map((month, index) => (
            <Month month={month} key={index} />
        ));

        return <div>{months}</div>;
    }
};

export default Calendar;

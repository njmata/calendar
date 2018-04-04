import React from "react";

const Day = props => {
    let extendedClassName = "no_day";
    if (props.text) {
        if (props.dayOfTheWeek === 0 || props.dayOfTheWeek === 6) {
            extendedClassName = "weekend";
        } else {
            extendedClassName = "weekday";
        }
    }

    return <div className={`day ${extendedClassName}`}>{props.text}</div>;
};

export default Day;

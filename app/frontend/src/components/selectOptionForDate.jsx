import React from "react";

const SelectOptionForDate = (props) => {
    return (
        <>
            <option value={props.value}>{new Date(props.option).toDateString()}</option>
        </>
    );
};export default SelectOptionForDate;
import React from "react"; 

const  DropDownOptionComponent = (props) => {
    return (
        <>
            <option value={props.value}>{props.name}</option>
        </>
    );
};
export default DropDownOptionComponent;


import React from "react";

const DashboardTableRow = (props) => {
    return(
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.msg}</td>
            </tr>
        </>
    );
};
export default DashboardTableRow;
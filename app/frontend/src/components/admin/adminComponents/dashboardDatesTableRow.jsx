import React from "react";

const DashboardDatesTableRow = (props) => {
    return (
        <>
            <tr className="text-center">
                <td>{props.doctorName}</td>
                <td>{new Date(props.date).toLocaleDateString()}</td>
            </tr>
        </>
    );

};
export default DashboardDatesTableRow;
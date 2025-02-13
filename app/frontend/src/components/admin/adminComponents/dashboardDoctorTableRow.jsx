import React from "react";

const DashboardDoctorTableRow = (props) => {
    return(
        <>
            <tr className="text-center">
                <td>{props.name}</td>
                <td>{props.registrationNumber}</td>
                <td>{props.specialty}</td>
            </tr>
        </>
    );
};
export default DashboardDoctorTableRow;
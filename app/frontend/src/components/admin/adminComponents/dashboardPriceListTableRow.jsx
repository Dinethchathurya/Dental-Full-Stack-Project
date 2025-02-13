import React from "react";

const DashboardPriceListTableRow = (props) => {
    return (
        <>
            <tr >
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
        </>
    );

};
export default DashboardPriceListTableRow;
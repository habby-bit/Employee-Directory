import React from "react";

const TableBody = (props) => {
    return (
    <>
    <table className="table table-striped table-hover">
      <thead> 
        <tr>
            <th scope="col">First Name</th> 
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
          <tr>
              <td> {props.firstName} </td>
              <td> {props.lastName} </td>
              <td> {props.email} </td>
              <td> {props.phone} </td>
              <td> {props.age} </td>
          </tr>
       </tbody>
    </table> 
    </>
    );
}

export default TableBody;
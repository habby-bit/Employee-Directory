import axios from "axios";
import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import * as ReactBootstrap from "react-bootstrap"

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEmployeeData = async () => {
    try {
      const data = await axios.get("https://randomuser.me/api/?results=50");
      setEmployees(data.data.results)
    } catch (e) {
      console.log(e)
    }
  };

  const columns = [
    {dataField: "dob.age", text: "Age"},
    {dataField: "name.first", text: "First Name"},
    {dataField: "name.last", text: "Last Name"},
    {dataField: "email", text: "Email"},
    {dataField: "phone", text: "Phone Number"},
  ]

  useEffect(() => {
    getEmployeeData()
  }, [])
  return <div className="App">
    <BootstrapTable 
      keyField="dob.age"
      data={employees}
      columns={columns}
    />
  </div>;
}

export default Table;
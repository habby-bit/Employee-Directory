import axios from "axios";
import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import * as ReactBootstrap from "react-bootstrap"

const Table = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployeeData = async () => {
    try {
      const data = await axios.get("https://randomuser.me/api/?results=50");
      setEmployees(data.data.results)
    } catch (e) {
      console.log(e)
    }
  };

    const handleSort = (field, order) => {
    this.setState({
      field,
      order
    });
  }

  const columns = [
    {dataField: "name.first", text: "First Name", sort: true, onSort: this.handleSort},
    {dataField: "name.last", text: "Last Name", sort: true, onSort: this.handleSort},
    {dataField: "dob.age", text: "Age", sort: true, onSort: this.handleSort},
    {dataField: "email", text: "Email", sort: false},
    {dataField: "phone", text: "Phone Number", sort: false},
  ]

  useEffect(() => {
    getEmployeeData()
  }, [])

  return <div className="App">
    <BootstrapTable 
      keyField="dob.age"
      data={employees}
      columns={columns}
      sort={ {
        dataField: this.state.field,
        order: this.state.order
      } }
      striped
      hover
    />
  </div>;
}

export default Table;
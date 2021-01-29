import axios from "axios";
import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [sort, setSort] = useState({field:null, order:null});

  const getEmployeeData = async () => {
    try {
      const data = await axios.get("https://randomuser.me/api/?nat=us&results=50");
      setEmployees(data.data.results)
    } catch (e) {
      console.log(e)
    }
  };

  const handleSort = (field, order) => {
    setSort({
      field,
      order
    });
  }

  const columns = [
    {
      dataField: "name.first", 
      text: "First Name", 
      sort: true, 
      onSort: handleSort,
      headerStyle: () => {
        return { width: '200px', textAlign: 'center' }
      },
      style: {textAlign: "center"}
    },
    {
      dataField: "name.last", 
      text: "Last Name", 
      sort: true, 
      onSort: handleSort,
      headerStyle: () => {
        return { width: '200px', textAlign: 'center' }
      },
      style: {textAlign: "center"}
    },
    {
      dataField: "dob.age", 
      text: "Age", 
      sort: true, 
      onSort: handleSort,  
      headerStyle: () => {
        return { width: '80px', textAlign: 'center' }
      }, 
      style: {textAlign: "center"}
    },
    {
      dataField: "email", 
      text: "Email", 
      sort: false,
      headerStyle: () => {
        return { textAlign: 'center' }
      }, 
      style: {textAlign: "center"}
    },
    {
      dataField: "phone", 
      text: "Phone Number", 
      sort: false,
      headerStyle: () => {
        return { width: '190px', textAlign: 'center' }
      }, 
      style: {textAlign: "center"}
    }
  ]

  useEffect(() => {
    getEmployeeData()
  }, [])

  const { SearchBar } = Search;

  return <div className="App">
    <ToolkitProvider
        keyField="email"
        data={ employees }
        columns={ columns }
        search
        sort={{
          dataField: sort.field,
          order: sort.order
        }}
    >
      {props => (
          <div>
            <h1>Employee Directory </h1>
            <h5>Search for someone: </h5>
            <SearchBar { ...props.searchProps } />
            <hr />
            <BootstrapTable
              striped
              hover
              { ...props.baseProps }
            />
          </div>
        )}
    </ToolkitProvider>
  </div>;
}

export default Table;
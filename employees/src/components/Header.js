import React from "react"
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Table from "./Table"

const Header = () => {
    const { SearchBar } = Search;

    return (
    <ToolkitProvider>
        {
            props => (
            <div>
                <h3>Search: <SearchBar { ...props.searchProps } /> </h3>
                <hr/>
            </div>
            )
        }
    </ToolkitProvider>
    )

  }

export default Header;

// const Table = () => {
//   const [employees, setEmployees] = useState([]);

//   const getEmployeeData = async () => {
//     try {
//       const data = await axios.get("https://randomuser.me/api/?results=50");
//       setEmployees(data.data.results)
//     } catch (e) {
//       console.log(e)
//     }
//   };

//   const columns = [
//     {dataField: "name.first", text: "First Name", sort: true},
//     {dataField: "name.last", text: "Last Name", sort: true},
//     {dataField: "dob.age", text: "Age", sort: true},
//     {dataField: "email", text: "Email", sort: false},
//     {dataField: "phone", text: "Phone Number", sort: false},
//   ]

//   useEffect(() => {
//     getEmployeeData()
//   }, [])

//   return <div className="App">
//     <BootstrapTable 
//       keyField="dob.age"
//       data={employees}
//       columns={columns}
//       striped
//       hover
//     />
//   </div>;
// }

// export default Table;
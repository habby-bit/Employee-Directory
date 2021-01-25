import React, { Component } from "react";
import TableBody from "./components/TableBody";
import Wrapper from "./components/Wrapper"
import API from "./utils/API";

class App extends Component {
  state = {
    search: "",
    employees: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
          {this.state.employees.map(employee => (
            <TableBody
              key={employee.id}
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}
              phone={employee.phone}
              age={employee.dob.age}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;

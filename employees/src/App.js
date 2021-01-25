import React, { Component } from "react";
import EmployeeInfo from "./components/EmployeeInfo";
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
        {/* {this.state.employees.map(employee => ( */}
          <EmployeeInfo

            // removeFriend={this.removeFriend}
            // id={friend.id}
            // key={friend.id}
            // name={friend.name}
            // image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        {/* ))} */}
      </Wrapper>
    );
  }
}

export default App;

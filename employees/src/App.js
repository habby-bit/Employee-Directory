import axios from "axios";
import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import * as ReactBootstrap from "react-bootstrap"
import Table from "./components/Table"
import Header from "./components/Header"

const App = () => {
  return <div className="App">
    <Header></Header>
    <Table></Table>
  </div>;
}

export default App;
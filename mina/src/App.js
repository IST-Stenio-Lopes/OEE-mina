import React, { Component } from "react";
import Machines from "./components/machines";
import Menu from "./components/menu";
import index from "./index.css";

import ApexCharts from 'apexcharts';

function App() {
  return (
    <div>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </head>
      <Menu />
      <Machines />
    </div>
  );
}

export default App;

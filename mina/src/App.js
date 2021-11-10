import React, { Component } from "react";
import Machines from "./components/machines";
import Menu from "./components/menu";
import index from "./index.css";
import ApexCharts from 'apexcharts';
import ShowLarge from "./components/machines/show-large";
import ShowMedium from "./components/machines/show-medium";
import ShowSmall from "./components/machines/show-small";

function App() {
  return (
    <div>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </head>
      <Menu />
      <Machines />
      <ShowLarge/>
      <br/>
      <ShowMedium/>
      <br/>
      <ShowSmall/>
    </div>
  );
}

export default App;

import React from "react";
import Machines from "./components/machines";
import Menu from "./components/menu";


function App() {
  return (
    <div id="first-page">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </head>
      
      <Menu />
      <Machines/>
      <br/>
      <br/>
      <div id="show-app">

      </div>
      
    </div>
  );
}

export default App;

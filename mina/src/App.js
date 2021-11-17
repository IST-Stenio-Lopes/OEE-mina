import React from "react";
import Machines from "./components/machines";
import Workstation from "./components/workstation";
import Menu from "./components/menu";
import Register from "./components/register";

import Routes from "./routes/routes";

function App() {
  return (
    <div>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </head>
      
      <Menu />

      <br/>
      <br/>
      <div id="show-app">
      <br/>
      <Workstation/>
      </div>
      
    </div>
  );
}

export default App;

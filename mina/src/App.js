import React from "react";
import Machines from "./components/machines";
import Menu from "./components/menu";
import index from "./index.css";
import ShowLarge from "./components/machines/show-large";
import ShowMedium from "./components/machines/show-medium";
import ShowSmall from "./components/machines/show-small";
import Top from "./components/top";
import Workstation from "./components/workstation";
import Register from "./components/register";

function App() {
  return (
    <div>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </head>
      
      <Menu />
      <Top/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ShowLarge/>
      <br/>
      <ShowMedium/>
      <br/>
      <ShowSmall/>
      <br/>
      <Workstation/>
      <br/>
      <Register/>
    </div>
  );
}

export default App;

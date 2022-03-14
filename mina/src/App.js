import React from "react";
import Machines from './pages/begin';
import Workstation from "./components/workstation";
import Menu from "./components/menu";
import Register from "./pages/workstation register";
import Routes from "./routes/routes";
import Routees from "./routes/routes";
import AppProvider from "./contexts";

function App() {
  return (
      <AppProvider>
        <Menu />
        <Routees/>
      </AppProvider>
  );
}

export default App;

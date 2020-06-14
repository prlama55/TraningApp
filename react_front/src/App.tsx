import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Header from "./components/layouts/Header";
// import Dashboard from "./components/dashboard";
// import Cards from "./components/dashboard/Cards";
import Login from "./components/user/Login";
function App() {
  return (
    <div>
      {/* <Header username="Padma" />
      <Cards title="Card from APP" />
      <Dashboard title="dashboard" /> */}
      <Login />
    </div>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layouts/Header";
import Dashboard from "./components/dashboard";

// import Cards from "./components/dashboard/Cards";
 import Login from "./components/user/Login";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Users from "./components/user/Users";
import PageNotFound from "./components/PageNotFound";
import UserRoutes from "./components/user/UserRoutes";
interface Auth {
    username: string
}
function App() {
    const initialState: Auth={
        username: '',
    }
    const [auth,setAuth] = useState(initialState)
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        let getAuthFromSession= sessionStorage.getItem("auth");
        if(getAuthFromSession){
            const userauth:Auth = JSON.parse(getAuthFromSession.toString())
            setAuth({
                username: userauth?userauth.username:'',
            })
        }
    },[]);
    console.log("auth========",auth)
  return (
      <div>
          {auth.username &&
          <BrowserRouter>
              <Header username="Padma"/>
              {/*<Route path='/' children={(pro)<Header/>} exact/>*/}
              <Switch>
                  <Route path='/' component={Dashboard} exact/>
                  <Route path='/users' component={UserRoutes}/>
                  <Route component={PageNotFound}/>
              </Switch>
          </BrowserRouter>
          }
          {auth.username==='' &&
          <Login/>
          }
      </div>
  );
}

export default App;

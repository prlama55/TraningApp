import React from 'react'
import {Route, Switch} from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";
import UserCreate from "./UserCreate";
import BusinessRoutes from "../business/BusinessRoutes";

const UserRoutes=()=>{
    return(
        <Switch>
            <Route path='/users' render={props => <Users {...props}/>} exact/>
            <Route path='/business' component={BusinessRoutes}/>
            <Route path='/users/:id/details' exact render={props => <UserDetails {...props}/>}/>
            <Route path='/users/create' exact component={UserCreate}/>
        </Switch>
    )
}
export default  UserRoutes

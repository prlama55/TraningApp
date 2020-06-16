import React from 'react'
import {Route, Switch} from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";
import UserCreate from "./UserCreate";

const UserRoutes=()=>{
    return(
        <Switch>
            <Route path='/users' component={Users} exact/>
            <Route path='/users/:id/details' exact component={UserDetails}/>
            <Route path='/users/create' exact component={UserCreate}/>
        </Switch>
    )
}
export default  UserRoutes

import React from 'react'
import {Route, Switch} from "react-router-dom";
import Business from "./index";
import BusinessCreate from "./BusinessCreate";
const BusinessRoutes=()=>{
    return(
        <Switch>
            <Route path='/business' render={props => <Business {...props}/>} exact/>
            {/*<Route path='/business/:id/details' exact render={props => <UserDetails {...props}/>}/>*/}
            <Route path='/business/create' exact component={BusinessCreate}/>
        </Switch>
    )
}
export default  BusinessRoutes

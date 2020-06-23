import React, {useEffect, useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/layouts/Header";
import Dashboard from "./components/dashboard";

// import Cards from "./components/dashboard/Cards";
import Login from "./components/user/Login";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Users from "./components/user/Users";
import PageNotFound from "./components/PageNotFound";
import UserRoutes from "./components/user/UserRoutes";
import Registration from "./components/user/Registration";
import {AuthState} from "./@types/UserState";
import {connect} from "react-redux";

interface Auth {
    username: string
}

const mapStateToProps=(state: AuthState): MapStateToProps=>{
    return {
        auth: state.auth
    }
}
interface MapStateToProps {
    auth?: Auth
}

function App(props: MapStateToProps) {
    const initialState: Auth={
        username: '',
    }
    const [auth,setAuth] = useState(initialState)
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        let getAuthFromSession= props.auth;
        console.log("getAuthFromSession====",getAuthFromSession)
        if(getAuthFromSession?.username){
            const userauth:Auth = JSON.parse(getAuthFromSession.toString())
            setAuth({
                username: userauth?userauth.username:'',
            })
        }
    },[]);
    console.log("auth========",auth)
    return (
        <div>

            <BrowserRouter>
                        <Route path='/' render={props=><Header username={auth.username} {...props}/>}/>
                        <Switch>
                            <Route path='/dashboard' render={props=><Dashboard {...props}/>} exact/>
                            <Route path='/users' component={UserRoutes}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/register' exact component={Registration}/>
            </BrowserRouter>

        </div>
    );
}

export default connect(mapStateToProps, null)(App);

import React, { FC, useState } from "react";
import {RouteComponentProps} from 'react-router-dom'
import {UserLogin} from "../../@types/User";
import {config} from "../../config";
import StorageService from "../../services/Storage";
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";
import queryString from 'query-string'
import {Auth, AuthState} from "../../@types/UserState";
import {Dispatch} from 'redux'
import { setAuth } from "../../actions/authAction";
import {connect} from "react-redux";

const mapStateToProps=(state: AuthState): MapStateToProps=>{
  return {
    auth: state.auth
  }
}

const mapDispatchToProps=(dispatch: Dispatch)=>{
  return {
    userLogin:(auth: Auth)=> dispatch(setAuth(auth))
  }
}
interface MapStateToProps {
  auth: Auth
}
interface MapDispatchToProps {
  userLogin: (auth: Auth)=>void
}
type Props= MapStateToProps & MapDispatchToProps & RouteComponentProps
const Login: FC<Props> = (props:Props) => {
  const initialState: UserLogin = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const userLogin = async () => {
    const params: AxiosConfig={
      url: '/login',
      method: 'POST',
      data: formData
    }
    const { data } = await fetchService(params);
    if (data) {
      props.userLogin(data)
      StorageService.save(config.AUTH_KEY, JSON.stringify(data));
    }
    const query: any= queryString.parse(props.location.search)
    props.history.push('/dashboard')
  };

  return (
      <div className="container">
        <div className="card card-info login-card">
          <div className="card-header">
            <h4>User Login FormData: {JSON.stringify(props.auth)}</h4>
          </div>
          <form action="#" className="form">
            <div className="card-body">
              <div className="form-group">
                <label>
                  <strong>Username</strong>
                </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(elm) => {
                      setFormData({
                        ...formData,
                        username: elm.target.value,
                      });
                    }}
                />
              </div>
              <div className="form-group">
                <strong>Password</strong>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(elm) => {
                      setFormData({
                        ...formData,
                        password: elm.target.value,
                      });
                    }}
                />
              </div>
              <div className="form-group right">
                <a href="#"
                   onClick={()=>{
                     props.history.push('/register')
                   }}
                   className="btn m-2"
                >
                  Register
                </a>
                <button
                    type="button"
                    onClick={userLogin}
                    className="btn btn-primary"
                >
                  Login
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

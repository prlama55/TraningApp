import React, { FC, useState } from "react";
import {RouteComponentProps} from 'react-router-dom'
import {UserLogin} from "../../@types/User";
import {config} from "../../config";
import StorageService from "../../services/Storage";
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";
import queryString from 'query-string'
const Login: FC<RouteComponentProps> = (props:RouteComponentProps) => {
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
    console.log("data===",data)
    if (data) {
      StorageService.save(config.AUTH_KEY, JSON.stringify(data));
    }
    console.log("props====",props)
    const query: any= queryString.parse(props.location.search)
    console.log("query====",query)
    if(query.redirectUrl){
      props.history.push(query.redirectUrl)
    }
    else{
      props.history.push('/users')
    }
  };

  return (
      <div className="container">
        <div className="card card-info login-card">
          <div className="card-header">
            <h4>User Login FormData: {JSON.stringify(formData)}</h4>
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

export default Login;

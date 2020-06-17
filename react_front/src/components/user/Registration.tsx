import React, { FC, useState } from "react";
import {RouteComponentProps} from 'react-router-dom'
import {UserRegistration} from "../../@types/User";
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";
const Registration: FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const initialState: UserRegistration = {
    username: "",
    password: "",
    userType: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState('');
  const userLogin = async () => {
    const params: AxiosConfig={
      url: '/registration',
      method: 'POST',
      data: formData
    }
    const { data } = await fetchService(params);
    console.log("data====",data)
    if(data) setMessage('Successfully registered.')
    props.history.push(`/login?message=Successfully registered.`)
  };
  return (
    <div className="container">
      <div className="card card-info login-card">
        <div className="card-header">
          <h4>User Registration</h4>
        </div>
        {message!=='' &&
        <div className='alert'>
          {message}
        </div>
        }
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
            <div className="form-group">
              <strong>User Type</strong>
              <select className='form-control'
                      onChange={(elm) => {
                        setFormData({
                          ...formData,
                          userType: elm.target.value,
                        });
                      }}
              >
                {["Customer", "Business"].map((userType, i)=>(<option key={i} value={userType}>{userType}</option>))}
              </select>
            </div>
            <div className="form-group right">
              <button
                type="button"
                onClick={userLogin}
                className="btn btn-primary"
              >
                Register
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

import React, { FC, useState } from "react";
import axios from "axios";
interface UserLogin {
  username: string;
  password: string;
}
const Login: FC = () => {
  const initialState: UserLogin = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const userLogin = async () => {
    const baseUrl = "http://localhost:5000/api/login";
    const { data, status } = await axios.post(baseUrl, formData);
    if (status == 200) {
      sessionStorage.setItem("auth", JSON.stringify(data));
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

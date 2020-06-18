import React, { FC } from "react";
import {NavLink} from 'react-router-dom'
import {RouteComponentProps} from 'react-router-dom'
interface Props extends RouteComponentProps{
  username: string;
}
const Header: FC<Props> = (props: Props) => {
  const {history}= props
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink  className="nav-link" to='/'>Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/users'>Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/users/create'>Create User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/business'>Business</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/business/create'>Create Business</NavLink>
            </li>
          </ul>
          <a href='#' className='btn btn-primary' onClick={()=>{
            sessionStorage.removeItem('auth')
            history.push('/login')
            window.location.reload()
          }}>Logout</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { FC, useState } from "react";
import {NavLink} from 'react-router-dom'
import {RouteComponentProps} from 'react-router-dom'
interface Props extends RouteComponentProps{
  username: string;
}
const Header: FC<Props> = (props: Props) => {
  const {history}= props
  // const menus = [
  //   //   { id: "home", text: "Home" },
  //   //   { id: "services", text: "Services" },
  //   // ];
  // //   const [counter, setCounter] = useState(0);
  // const [menuItems] = useState(menus);
  //
  // const counterMenu = {
  //   menus: menus,
  //   counter: 0,
  // };
  // const [menuItemsCounter, setMenuItemsCounter] = useState(counterMenu);
  // console.log("menuItems===>>>", JSON.stringify(props));
  // const changeMenu = () => {
  //   setMenuItemsCounter({
  //     menus: [{ id: "1", text: "Customer" }], // menu, counter
  //     counter: menuItemsCounter.counter + 1,
  //   });
  // };
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

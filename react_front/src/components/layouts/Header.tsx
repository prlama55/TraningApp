import React, { FC, useState } from "react";
interface Props {
  username: string;
}
const Header: FC<Props> = (props: Props) => {
  const menus = [
    { id: "home", text: "Home" },
    { id: "services", text: "Services" },
  ];
  //   const [counter, setCounter] = useState(0);
  const [menuItems] = useState(menus);

  const counterMenu = {
    menus: menus,
    counter: 0,
  };
  const [menuItemsCounter, setMenuItemsCounter] = useState(counterMenu);
  console.log("menuItems===>>>", menuItems);
  const changeMenu = () => {
    setMenuItemsCounter({
      menus: [{ id: "1", text: "Customer" }], // menu, counter
      counter: menuItemsCounter.counter + 1,
    });
  };
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

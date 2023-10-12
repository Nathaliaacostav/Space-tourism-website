import { Link } from "react-router-dom";
import "../../sass/NavBar/NavBar.scss";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);
  const items = [
    { id: "00", name: "home", path: "/" },
    { id: "01", name: "destination", path: "/destination" },
    { id: "02", name: "crew", path: "/crew" },
    { id: "03", name: "technology", path: "/technology" },
  ];
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  console.log(openMenu);

  return (
    <div className="container">
      <figure className="icon">
        <img src="/web-icon.png" alt="logo" />
      </figure>
      {!openMenu && (
        <button onClick={handleOpenMenu} className={`menu-button`}>
          <img src="/hamburger-menu.svg" alt="menu" />
        </button>
      )}
      <div className="navDivider"></div>
      <div className={`sidebar ${openMenu ? "sidebar-animation" : null}`}>
        <button onClick={handleOpenMenu} className="close">
          <img src="/close.svg" alt="close" />
        </button>
        <nav className="sidebar__nav">
          <ul>
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`nav_item ${item.name === open ? "border" : ""}`}
                >
                  <Link to={item.path} onClick={() => setOpen(item.name)}>
                    <strong>{item.id}</strong> {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="navDestock">
        <nav>
          <ul className="navDestock__navegacion">
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`navDestock__navegacion__link ${
                    item.name === open ? "border" : ""
                  }`}
                >
                  <Link to={item.path} onClick={() => setOpen(item.name)}>
                    <strong>{item.id}</strong> {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

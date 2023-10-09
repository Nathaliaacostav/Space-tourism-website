import { Link } from "react-router-dom";
import "../../sass/NavBar/NavBar.scss";

const NavBar = () => {
  const items = [
    { id: "00", name: "home", path: "/" },
    { id: "01", name: "destination", path: "/destination" },
    { id: "02", name: "crew", path: "/crew" },
    { id: "03", name: "technology", path: "/technology" },
  ];
  return (
    <div className="navDestock">
      <nav>
        <ul className="navDestock__navegacion">
          {items.map((item, index) => {
            return (
              <li key={index} className="navDestock__navegacion__link">
                <Link to={item.path}>{item.id + " " + item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

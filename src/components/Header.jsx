import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-container">
        <nav className="nav">
          <h1 className="brand-name">loopstudios</h1>
          <ul className="nav-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
        <section className="banner">
          <p className="banner-item">IMMERSIVE</p>
          <p className="banner-item">EXPERIENCES</p>
          <p className="banner-item">THAT DELIVER</p>
        </section>
      </div>
    </>
  );
}

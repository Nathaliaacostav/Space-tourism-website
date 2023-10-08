import { Link } from "react-router-dom";
import Avg from "../components/Avg.jsx";

export default function Destination() {
  return (
    <section className="backgound-image">
      <Link to="/">Destination</Link>
      <h2>01 PICK YOUR DESTINATION</h2>
      <section className="destination-container">
        <figure>
          <img />
        </figure>
        <div>
          <nav>
            <ul>
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </nav>
          <h1>MOON</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div></div>
          <Avg title="" />
          <div>
            <h4>AVG. DISTANCE</h4>
            <h3>384,400 km</h3>
          </div>
        </div>
      </section>
    </section>
  );
}

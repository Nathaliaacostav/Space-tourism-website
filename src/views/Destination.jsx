import Avg from "../components/Avg.jsx";
import "../sass/_destination.scss";
import { useState } from "react";

export default function Destination() {
  const planets = [
    {
      name: "moon",
      src: "/moon.png",
      uppercase: "MOON",
    },
    {
      name: "mars",
      src: "/mars.png",
      uppercase: "MARS",
    },
    {
      name: "europa",
      src: "/europa.png",
      uppercase: "EUROPA",
    },
    {
      name: "titan",
      src: "/titan.png",
      uppercase: "TITAN",
    },
  ];
  const [currentPlanet, setPlanet] = useState(planets[0]);
  const handleChangePlanet = (planet) => {
    if (planet.name === "moon") setPlanet(planet);
    if (planet.name === "mars") setPlanet(planet);
    if (planet.name === "europa") setPlanet(planet);
    if (planet.name === "titan") setPlanet(planet);
  };
  return (
    <section className="backgound-image">
      <h2 className="title-destination">
        <strong className="title-number">01</strong> PICK YOUR DESTINATION
      </h2>
      <div className="content-container">
        <div className="left-container">
          <figure>
            <img
              className="planet-img"
              src={currentPlanet.src}
              alt={currentPlanet.name}
            />
          </figure>
        </div>
        <section className="destination-container">
          <nav className="navbar">
            <ul>
              {planets.map((planet, index) => {
                return (
                  <li key={index}>
                    <button
                      className={
                        planet.name === currentPlanet.name ? "active" : ""
                      }
                      onClick={() => handleChangePlanet(planet)}
                      id={planet.name}
                    >
                      {planet.uppercase}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <h1 className="title-planet">MOON</h1>
          <p className="planet-description">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="divider"></div>
          <div className="avg-container">
            <Avg title="AVG. DISTANCE" body="384,400 km" />
            <Avg title="AVG. DISTANCE" body="384,400 km" />
          </div>
        </section>
      </div>
    </section>
  );
}

import Avg from "../components/Avg.jsx";
import "../sass/_destination.scss";
import { useState } from "react";

export default function Destination() {
  const planets = [
    {
      name: "moon",
      src: "/moon.png",
      uppercase: "MOON",
      info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      time: "3 days",
    },
    {
      name: "mars",
      src: "/mars.png",
      uppercase: "MARS",
      info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      time: "9 months",
    },
    {
      name: "europa",
      src: "/europa.png",
      uppercase: "EUROPA",
      info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      time: "3 years",
    },
    {
      name: "titan",
      src: "/titan.png",
      uppercase: "TITAN",
      info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      time: "7 years",
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
          <h1 className="title-planet">{currentPlanet.uppercase}</h1>
          <p className="planet-description">{currentPlanet.info}</p>
          <div className="divider"></div>
          <div className="avg-container">
            <Avg title="AVG. DISTANCE" body={currentPlanet.distance} />
            <Avg title="Est. travel time" body={currentPlanet.time} />
          </div>
        </section>
      </div>
    </section>
  );
}

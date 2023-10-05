import React from "react";
import launch from "/public/launch-vehicle.jpg";
import spaceport from "/public/spaceport.jpg";
import spacecapsule from "/public/spacecapsule.jpg";
import "../sass/global.scss";

function TechnologyContent() {
  const titles = [
    [
      "LAUNCH VEHICLE",
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      launch,
    ],
    /*['SPACEPORT', "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. ", spaceport],
    ['SPACE CAPSULE', "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", spacecapsule]
  */
  ];
  return (
    <div>
      {titles.map((item, index) => {
        return (
          <div key={index} className="technology_content">
            <div className="technology_content-num">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div className="technology_content-text">
              <p className="technology_content-text-subtitle">
                THE TERMINOLOGY…
              </p>
              <p className="technology_content-text-title">{item[0]}</p>
              <p className="technology_content-text-content">{item[1]}</p>
            </div>
            <div className="technology_content-img">
              <img src={item[2]} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TechnologyContent;

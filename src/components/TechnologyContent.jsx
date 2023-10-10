import { useState } from "react";
import launch from "/public/launch-vehicle.jpg";
import spaceport from "/public/spaceport.jpg";
import spacecapsule from "/public/spacecapsule.jpg";
import spaceportTable from "/public/spaceport-table.png";
import spacecapsuleTable from "/public/spacecapsule-table.png";
import launchTable from "/public/launch-vehicle-table.jpg";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/backgrounTechnology.png");
  background-color: #0B0D17;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (min-width: 501px)and (max-width:1100px)
  {

  }
`
const DivContainerTechno = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 40px;
  margin-top: 10rem;
  margin-left: 7rem;
  position: absolute;
  gap: 1rem;
  p{
    margin:0;
    padding: 0;
  }
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    margin-left: 2rem;
  }
`;
const PtextNum = styled.p`
  color: #FFF;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  opacity: 0.25;
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
  }
`;
const PtextTitle = styled.p`
  color: #FFF;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
  }
`;
const DivSlider = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 10%;
  margin-left: 7rem;
  justify-content: space-arround;
  align-items: center;
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    flex-direction: column;
    margin-left: 0;
    margin-top: 4rem;
  }
`;
const Divbuttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-right: 3.5rem;
  margin-top: 1rem;

  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    display: flex;
    flex-direction: row;
    gap: 35px;
    position: relative;
    top: 35rem;
  }
`;
const DivbuttonsItem = styled.div`
  &:hover { 
    cursor: pointer;
  }
`;
const DivContentSlider = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 3rem;
  justify-content: space-between;
  align-items:center; 
  @media screen and (min-width: 501px)and (max-width:1100px)
  {    
    margin-top: 5rem;
    margin-left: 0; 
    flex-direction: column-reverse;
    justify-content: none;
    height: 70%;
  }
`;
const Divtext = styled.div`
    width: 500px;
    height: 303px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: scale(1.5);
    margin-left: 10rem;
    @media screen and (min-width: 501px)and (max-width:1100px)
    {
      width: 100%;
      justify-content: center;
      align-items: center;
      transform: scale(1);
      margin-left: 0;
    }
`;
const DivOnetext = styled.div`  
  color: #D0D6F9;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px
  p{
    margin:0;
    padding: 0.5rem;
  }
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
  }
`;
const Divcontent = styled.div`
  color: #D0D6F9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 177.778% */
  p{
    margin:0;
    padding: 0.5rem;
  }
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
  }
`;

const DivSecondText = styled.div`
  color: #FFF;
  font-family: Bellefair;
  font-size: 56px;
  font-style: normal;
  font-weight: 100;
  width: 100%;
  
  p{
    margin:0;
    padding: 0.5rem;
  }
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    width: auto;
  }
`;
const DivImg = styled.div`
  width: 40rem;
  hegith: 70rem;
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    width: 100%;
  }
`;
const Imgdesktop = styled.img`
    width: 100%;
    height: 100%;
    @media screen and (min-width: 501px)and (max-width:1100px)
  {
      display: none;
    }
`;
const ImgTable = styled.img`
  display: none;
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const SvgDesktop = styled.svg`
  &:hover { 
    cursor: pointer;
  }
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    display: none;
  }
`;

const SvgTable = styled.svg`
  display: none;
  @media screen and (min-width: 501px)and (max-width:1100px)
  {
    display: block;
  }
`;

function TechnologyContent() {
  const items = [
    {
      title: "LAUNCH VEHICLE",
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: launch,
      table: launchTable,
    },
    {
      title: "SPACEPORT",
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. ",
      img: spaceport,
      table: spaceportTable,
    },
    {
      title: "SPACE CAPSULE",
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: spacecapsule,
      table: spacecapsuleTable,
    },
  ];

  const [indexActual, setIndexActual] = useState(0);

  const cantidad = items?.length;

  //reotrna parametro para evitar errores

  if (!Array.isArray(items) || cantidad === 0) return;

  const goToSlide = (slideIndex) => {
    setIndexActual(slideIndex);
  };

  return (
    <Section>
      <DivContainerTechno>
        <PtextNum>03</PtextNum>
        <PtextTitle>SPACE LAUNCH 101</PtextTitle>
      </DivContainerTechno>
      <DivSlider>
        <Divbuttons>
          {items.map((_, idx) => {
            return (
              <div key={idx} onClick={() => goToSlide(idx)}>
                {indexActual === idx ? (
                  <DivbuttonsItem>
                    <SvgDesktop
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="white"
                    >
                      <circle
                        opacity="1"
                        cx="40"
                        cy="40"
                        r="39.5"
                        stroke="white"
                      />
                      <text
                        x="40"
                        y="46"
                        fill="black"
                        fontSize="30"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                      >
                        {idx + 1}
                      </text>
                    </SvgDesktop>
                    <SvgTable
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <circle cx="30" cy="30" r="30" fill="white" />
                      <text
                        x="30"
                        y="35"
                        fill="black"
                        fontSize="30"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                      >
                        {idx + 1}
                      </text>
                    </SvgTable>
                  </DivbuttonsItem>
                ) : (
                  <DivbuttonsItem>
                    <SvgDesktop
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <circle
                        opacity="0.25"
                        cx="40"
                        cy="40"
                        r="39.5"
                        stroke="white"
                      />
                      <text
                        x="40"
                        y="46"
                        fill="white"
                        fontSize="30"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                      >
                        {idx + 1}
                      </text>
                    </SvgDesktop>
                    <SvgTable
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <circle
                        opacity="0.25"
                        cx="30"
                        cy="30"
                        r="29.5"
                        stroke="white"
                      />
                      <text
                        x="30"
                        y="35"
                        fill="white"
                        fontSize="40"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                      >
                        {idx + 1}
                      </text>
                    </SvgTable>
                  </DivbuttonsItem>
                )}
              </div>
            );
          })}
        </Divbuttons>
        <DivContentSlider>
          <Divtext>
            <DivOnetext>
              <p>THE TERMINOLOGY…</p>
            </DivOnetext>
            <DivSecondText>
              <p>{items[indexActual].title}</p>
            </DivSecondText>
            <Divcontent>
              <p>{items[indexActual].text}</p>
            </Divcontent>
          </Divtext>
          <DivImg>
            <Imgdesktop src={items[indexActual].img} alt="img" />
            <ImgTable src={items[indexActual].table} alt="img-table" />
          </DivImg>
        </DivContentSlider>
      </DivSlider>
    </Section>
  );
}

export default TechnologyContent;
import { useState } from "react";
import launch from "/launch-vehicle.jpg";
import spaceport from "/spaceport.jpg";
import spacecapsule from "/spacecapsule.jpg";
import spaceportTable from "/spaceport-table.png";
import spacecapsuleTable from "/spacecapsule-table.png";
import launchTable from "/launch-vehicle-table.jpg";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/backgrounTechnology.png");
  background-color: #0b0d17;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
const DivContainerTechno = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 40px;
  margin-top: 10rem;
  margin-left: 7rem;
  position: absolute;
  gap: 1rem;
  p {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 500px) {
    padding-right: 0px;
    margin-left: 0;
    margin-top: 2rem;
    width: 100%;
    justify-content: center;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    position: relative;
    margin-left: 2rem;
    margin-top: 6rem;
    display: flex;
  }
`;
const PtextNum = styled.p`
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  opacity: 0.25;
  @media screen and (max-width: 500px) {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.7px;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
  }
`;
const PtextTitle = styled.p`
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
  @media screen and (max-width: 500px) {
    color: #fff;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
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
  @media screen and (max-width: 500px) {
    display: flex;
    margin-left: 0;
    margin-top: 0;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 0;
  }
`;
const Divbuttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-right: 3.5rem;
  margin-top: 1rem;

  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const DivButtonsTablet = styled.div`
  display: none;
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    transform: scale(0.5);
    margin-top: 2%;
    margin-bottom: 2%;
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
  align-items: center;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
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
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    transform: scale(0.9);
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    margin-left: 0;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
<<<<<<< HEAD
=======
    border: 1px solid red;
>>>>>>> a0433ba (remove public imports)
  }
`;
const DivOnetext = styled.div`
  color: #d0d6f9;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px p {
    margin: 0;
    padding: 0.5rem;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
  }
`;
const Divcontent = styled.div`
  color: #d0d6f9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 177.778% */
  p {
    margin: 0;
    padding: 0.5rem;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 23px;
  }
`;

const DivSecondText = styled.div`
  color: #fff;
  font-family: Bellefair;
  font-size: 56px;
  font-style: normal;
  font-weight: 100;
  width: 100%;

  p {
    margin: 0;
    padding: 0.5rem;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    width: auto;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
`;
const DivImg = styled.div`
  width: 40rem;
  hegith: 70rem;
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Imgdesktop = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const ImgTable = styled.img`
  display: none;
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const SvgDesktop = styled.svg`
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: none;
  }
`;

const SvgTable = styled.svg`
  display: none;
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: block;
  }
`;

const customMedia = generateMedia({
  desktop: "1440px",
  tablet: "1024px",
});

const DivContainer = styled.div`
  width: 1440px;
  height: 900px;
  background-color: #0b0d17;
  background-image: url("/public/backgrounTechnology.png");

  ${customMedia.lessThan("tablet")`
      width: 768px;
      height: 1024px;
      
  `};
`;
const DivContainerTechno = styled.div`
  display: flex;
  padding-top: 100px;
  margin-left: 167px;
  gap: 24px;

  ${customMedia.lessThan("tablet")`
        position: relative;
        right: 130px;
        top: -50px;
    `};
`;
const PtextNum = styled.p`
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  opacity: 0.25;

  ${customMedia.lessThan("tablet")`
        color: #FFF;
        font-family: Barlow Condensed;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 3.375px;  
`};
`;
const PtextTitle = styled.p`
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
  ${customMedia.lessThan("tablet")`
      color: #FFF;
      font-family: Barlow Condensed;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 3.375px;
      text-transform: uppercase;
    `};
`;
const DivSlider = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 140px;

  ${customMedia.lessThan("tablet")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
  `};
`;
const Divbuttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 501px)and (max-width:1100px)
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 300px;
    right: 70px;
    cursor: pointer;
  `};
`;
const DivbuttonsItem = styled.div`
  margin: 10px;
`;
const DivContentSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${customMedia.lessThan("tablet")`
    display: flex;
    width: 458px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `};
`;
const Divtext = styled.div`
  width: 500px;
  height: 271px;
  flex-shrink: 0;
  margin-right: 80px;
  margin-left: 80px;
  ${customMedia.lessThan("tablet")`
      display: flex;
      width: 458px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    `};
`;
const DivOnetext = styled.div`
  color: #d0d6f9;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
  ${customMedia.lessThan("tablet")`´
          display: flex;      
          position: relative;
          top: 50px;
          color: #D0D6F9;
          font-family: Barlow Condensed;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 2.7px;
    `};
`;
const Divcontent = styled.div`
  color: #d0d6f9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  ${customMedia.lessThan("tablet")`
          color: #D0D6F9;
          text-align: center;
          font-family: Barlow;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px; /* 175% */
      `};
`;

const DivSecondText = styled.div`
  color: #fff;
  font-family: Bellefair;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${customMedia.lessThan("tablet")`
      color: #FFF;
      text-align: center;
      font-family: Bellefair;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
    `};
`;
const DivImg = styled.div`
  ${customMedia.lessThan("tablet")`
      width: 768px;
      height: 310px;
      position: relative;
      top: -110px;
    `};
`;
const Imgdesktop = styled.img`
  display: bock;
  ${customMedia.lessThan("tablet")`
      display: none;
    `};
`;
const ImgTable = styled.img`
  display: none;
  ${customMedia.lessThan("tablet")`
      display: block;
    `};
`;
const SvgDesktop = styled.svg`
  display: block;
  ${customMedia.lessThan("tablet")`
      display: none;
  `};
`;

const SvgTable = styled.svg`
  display: none;
  ${customMedia.lessThan("tablet")`
      display: block;
  `};
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
          <DivButtonsTablet>
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
          </DivButtonsTablet>
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

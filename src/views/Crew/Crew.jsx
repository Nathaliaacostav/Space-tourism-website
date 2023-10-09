import { useState } from "react";
import styled from "styled-components";
import { SliderCrew } from "../../components/SliderCrew/SliderCrew";

const DivPrincipal = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/ImgCrew/Bitmap.png");
  background-size: cover;
  box-sizing: border-box;
`;

const DivContainer = styled.div`
  padding-left: 12rem;
  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    padding-left: 2.5rem;
  }
`;
const DivTextImg = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 80%;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: auto;
  }
`;

const H2 = styled.h2`
  color: white;
  font-size: 28px;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  padding-top: 15rem;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding-top: 6rem;
    display: flex;
    justify-content: center;
    letter-spacing: 2.7px;
    font-family: "Barlow Condensed", sans-serif;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    padding-top: 10rem;
  }
`;
const H2span = styled.span`
  font-weight: 700;
  opacity: 0.4;
  @media screen and (max-width: 500px) {
    font-size: 17px;
    font-weight: 400;
    font-family: "Barlow Condensed", sans-serif;
  }
`;

const DivText = styled.div`
  color: white;
  word-wrap: break-word;

  @media screen and (max-width: 500px) {
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid #383b4b;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const DivTextH3 = styled.h3`
  font-size: 32px;
  font-family: "Bellefair", serif;
  font-weight: 400;
  text-transform: upperCase;
  opacity: 0.4;
  margin-top: 6rem;
  margin-bottom: 0;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    margin-top: 2rem;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    font-size: 24px;
    margin-top: 4rem;
  }
`;
const DivTextH2 = styled.h2`
  font-size: 56px;
  font-family: "Bellefair", serif;
  font-weight: 400;
  text-transform: upperCase;
  width: 40rem;
  margin-top: 1.5rem;
  @media screen and (max-width: 500px) {
    font-size: 24px;
    width: auto;
    margin-top: 1rem;
  }
  @media screen and (min-width: 501px) and (max-width: 1100px) {
    width: auto;
    font-size: 40px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;
const DivTextP = styled.p`
  width: 28rem;
  height: 15rem;
  color: #d0d6f9;
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  line-height: 32px;
  @media screen and (max-width: 500px) {
    display: flex;
    text-align: center;
    width: 100%;
    height: 8rem;
    font-size: 15px;
    line-height: 25px;
  }
  @media screen and ((min-width: 501px)and (max-width:1100px)) {
    font-size: 16px;
    line-height: 28px;
    width: 95%;
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
    height: 8rem;
  }
`;
const DivImg = styled.img`
  width: 25rem;
  height: 39rem;
  margin-top: -2rem;
  @media screen and (max-width: 500px) {
    width: 15rem;
    height: 21rem;
    margin-top: 0;
  }
  @media screen and ((min-width: 501px)and (max-width:1100px)) {
    width: auto;
    height: 20.5rem;
    margin-top: 1rem;
  }
`;

const DivSlider = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    margin-top: 2rem;
    order: -1;
  }
  @media screen and ((min-width: 501px)and (max-width:1100px)) {
    margin-top: 0;
  }
`;
const SliderBottomOpacy = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: white;
  border-radius: 10px;
  margin-right: 1rem;
  opacity: 0.4;
`;
const SliderBottom = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: white;
  border-radius: 10px;
  margin-right: 1rem;
`;

const Crew = () => {
  const [imgIndex, setImIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setImIndex(slideIndex);
  };
  return (
    <DivPrincipal>
      <DivContainer>
        <H2>
          <H2span>02</H2span> MEET YOUR CREW
        </H2>
        <DivTextImg>
          <DivText>
            <DivTextH3>{SliderCrew[imgIndex].workload}</DivTextH3>
            <DivTextH2>{SliderCrew[imgIndex].name}</DivTextH2>
            <DivTextP>{SliderCrew[imgIndex].description}</DivTextP>

            <DivSlider>
              {SliderCrew.map((_, idx) => (
                <div key={idx} onClick={() => goToSlide(idx)}>
                  {imgIndex === idx ? <SliderBottom /> : <SliderBottomOpacy />}
                </div>
              ))}
            </DivSlider>
          </DivText>

          <DivImg src={SliderCrew[imgIndex].img} alt="img" />
        </DivTextImg>
      </DivContainer>
    </DivPrincipal>
  );
};

export default Crew;

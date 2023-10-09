import(
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200&family=Barlow:wght@100&family=Bellefair&display=swap"
);
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/HomeBg.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  background-repeat: no-repeat;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10%;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/HomeAltBg.jpg");
  }
  @media (min-width: 375px) {
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (min-width: 375px) and (min-height: 667px) {
  }
`;

const Subtitle = styled.h3`
  width: 400px;
  font-weight: 400;
  font-size: 18px;
  padding-left: 15px;
  margin-top: 100px;
  line-height: 33.6px;
  letter-spacing: 4.72px;
  color: #d0d6f9;
  font-family: "Barlow Condensed", sans-serif;
  @media (max-width: 1024px) {
    padding: 0;
  }
  @media (min-width: 768px) and (min-height: 1024px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
    align-items: center;
    color: #d0d6f9;
    font-family: "Barlow Condensed", sans-serif;
  }
  @media (min-width: 375px) and (min-height: 667px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
    align-items: center;
    color: #d0d6f9;
    font-family: "Barlow Condensed", sans-serif;
  }
`;

const H1 = styled.h1`
  font-weight: 300;
  font-size: 6rem;
  color: #ffff;
  font-family: "Bellefair", serif;
  margin: 0;
`;

const P1 = styled.p`
  width: 444px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  font-family: "Barlow", sans-serif;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;
const Button = styled.button`
  width: 200px;
  height: 200px;
  margin-top: 100px;
  border-radius: 50%; /* Esto hace que el botón sea redondo */
  background-color: #fafbfc; /* Color de fondo del botón */
  color: #2a2929; /* Color del texto en el botón */
  text-align: center; /* Alinear el contenido al centro del botón */
  font-size: 1.2rem; /* Tamaño de fuente del texto */
  font-family: "Bellefair", serif;
  font-weight: 400px;
  line-height: 36.67px;
  letter-spacing: 5px;
  margin-top: 190px;
  text-decoration: none; /* Eliminar subrayado en caso de que sea un enlace */
  cursor: pointer; /* Cambiar el cursor al pasar por encima */
  @media (min-width: 768px) and (min-height: 1024px) {
  }
  @media (min-width: 375px) and (min-height: 667px) {
  }
`;
const Home = () => {
  return (
    <>
      <Section>
        <Div1>
          <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
          <H1>SPACE</H1>
          <P1>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </P1>
        </Div1>
        <Button>EXPLORE</Button>
      </Section>
    </>
  );
};

export default Home;

import { useNavigate } from "react-router-dom";
import "../sass/home.scss";

const App = () => {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <div className="home-container__info">
        <h3 className="home-container__info--subtitle">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="home-container__info--title">SPACE</h1>
        <p className="home-container__info--text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button
        className="home-container__button"
        onClick={() => navigate("/destination")}
      >
        EXPLORE
      </button>
    </section>
  );
};

export default App;

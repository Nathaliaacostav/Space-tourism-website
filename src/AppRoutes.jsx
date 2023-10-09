import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page404 from "./views/Page404/Page404";
import Home from "./views/Home";
import Destination from "./views/Destination";
import TechnologyContent from "./components/TechnologyContent";
import "./sass/global.scss";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="technology" element={<TechnologyContent />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

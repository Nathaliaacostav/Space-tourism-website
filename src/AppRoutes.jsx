import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page404 from "./views/Page404/Page404";
import Home from "./views/Home";
import Destination from "./views/Destination";
import Technology from "./views/Technology";
import Crew from "./views/Crew/Crew";
import "./sass/global.scss";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

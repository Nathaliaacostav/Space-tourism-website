import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Crew from './views/Crew/Crew'
import Page404 from './views/Page404/Page404'
import Home from './views/Home'
import "./sass/global.scss"

const AppRoutes = () => {
  return (
    <Routes>
        <Route  element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="destination" element={<Crew/>} />
          <Route path="crew" element={<Crew/>} />
          <Route path="technology" element={<Crew/>} />
          <Route path="*" element={<Page404/>} />
        </Route>
    </Routes>
  )
}


export default AppRoutes
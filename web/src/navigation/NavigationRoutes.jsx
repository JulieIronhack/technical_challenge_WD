import { Routes, Route } from "react-router-dom";
import * as Screens from "../screens";

function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Screens.HomeScreen /> } />
      <Route path="/phones" element={ <Screens.ListScreen /> } />
      <Route path="/phones/:id" element={ <Screens.DetailScreen/> } />
    </Routes>
  )
}

export default NavigationRoutes;
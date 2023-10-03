//
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import Autos from './components/Autos'
import Camionetas from './components/Camionetas'
import NavBar from './components/Navbar'
import NoMatch from './NoMatch'
import AllVehiculos from "./components/AllVehiculos";
import Home from './components/Home'

function App() {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autos" element={<Autos />} />
        <Route path="/camionetas" element={<Camionetas />} />
        <Route path="/allVehiculos" element={<AllVehiculos />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>   
  )
}

export default App

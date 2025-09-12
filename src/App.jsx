import './App.css'
import Landingpage from './Intro.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FlightSearch from "./FlightSearch";

export default function App() {
  return (
    <BrowserRouter>
    <div className = "bg-[#262D2D] h-screen">
      <Routes>
      <Route path = "/" element = { <Landingpage />}/>
      <Route path = "/FlightSearch" element = {<FlightSearch />} />
      </Routes>
   
   </div>
   </BrowserRouter>
  )
}

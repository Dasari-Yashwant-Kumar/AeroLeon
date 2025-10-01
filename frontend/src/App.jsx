import './App.css'
import Landingpage from './Intro.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FlightSearch from "./FlightSearch";
import {CheckOut} from "./CheckOut";
import {TripProvider} from "./tripContext";


export default function App() {
  return (
    <TripProvider>
    <BrowserRouter>
    <div>
      <Routes>
      <Route path = "/" element = { <Landingpage />}/>
      <Route path = "/FlightSearch" element = {<FlightSearch />} />
      <Route path = "/CheckOut" element = {<CheckOut/>}/>
      </Routes>
   </div>
   </BrowserRouter>
   </TripProvider>
  )
}

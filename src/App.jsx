import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Subscribe from "./pages/subscribe/subscribe";
import Contact from "./pages/contact/contact";
import Clients from "./pages/clients/clients";
import Story from "./pages/story/story";
import Services from "./pages/services/services";
import Apply from "./pages/apply/apply";
import Getintouch from "./pages/getintouch/getintouch";
import Footer from './components/footer/footer';

import Airbnb from "./pages/work/Airbnb";
import CalendarTask from "./pages/work/CalendarTask";
import Chama from "./pages/work/Chama";
import Daiptv from "./pages/work/Daiptv";
import IntuitionBuilder from "./pages/work/IntuitionBuilder";
import LongStatusPro from "./pages/work/LongStatusPro";
import MissCaddie from "./pages/work/MissCaddie";
import QrScanner from "./pages/work/QrScanner";
import RoutineFlow from "./pages/work/RoutineFlow";
import TalkTogather from "./pages/work/TalkTogather";
import Trip4Pet from "./pages/work/Trip4Pet";
import TypeKing from "./pages/work/TypeKing";
import WhatzBoost from "./pages/work/WhatzBoost";

import './App.css';

import { useEffect } from 'react'
import faviconSrc from './assets/favicon.ico'


export default function App() {
  // Since you're using HashRouter, you don't need to specify a basename
  // HashRouter uses the hash portion of the URL which is independent of the base path
  
  // DISPLAYING FAVICON
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']")
    if (link) {
      link.href = faviconSrc
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/story" element={<Story />} />
        <Route path="/services" element={<Services />} />        
        <Route path="/apply" element={<Apply />} />
        <Route path="/getintouch" element={<Getintouch />} />
        
        <Route path="/work/Airbnb" element={<Airbnb />} />
        <Route path="/work/CalendarTask" element={<CalendarTask />} />
        <Route path="/work/Chama" element={<Chama />} />
        <Route path="/work/Daiptv" element={<Daiptv />} />
        <Route path="/work/IntuitionBuilder" element={<IntuitionBuilder />} />
        <Route path="/work/LongStatusPro" element={<LongStatusPro />} />
        <Route path="/work/MissCaddie" element={<MissCaddie />} />
        <Route path="/work/QrScanner" element={<QrScanner />} />
        <Route path="/work/RoutineFlow" element={<RoutineFlow />} />
        <Route path="/work/TalkTogather" element={<TalkTogather />} />
        <Route path="/work/Trip4Pet" element={<Trip4Pet />} />
        <Route path="/work/TypeKing" element={<TypeKing />} />
        <Route path="/work/WhatzBoost" element={<WhatzBoost />} />
      </Routes>
    </Router>
  );
}
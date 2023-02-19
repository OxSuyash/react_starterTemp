import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Header from './components/Header';
import Home from "./components/Home";
import Review from "./components/Review";
import "./styles/App.scss"

function App() {
  return (
    
    <Router>
     
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/review" element={<Review/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;

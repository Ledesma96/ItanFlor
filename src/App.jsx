import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: false,
};

ReactPixel.init('824213002605364', null, options);

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import Items from './components/Items';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';



function App() {
 

  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

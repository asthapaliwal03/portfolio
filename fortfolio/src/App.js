import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header.js';
import About from './component/about/About.js';
import Experience from './component/Experience/Experience.js';
import Portfolio from './component/portfolio/Portfolio.js';
import Nav from './component/nav/Nav.js';
import Contact from './component/contact/Contact.js';
import Footer from './component/Footer/Footer.js';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
    <Route path='/' element={<><Header/><About/><Experience/><Portfolio/><Footer/></> }  />
    <Route path='/about' element={<About/>} />
    <Route path='/experience' element={<Experience/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/footer' element={<Footer/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;

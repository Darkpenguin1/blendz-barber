import './index.css';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {

  
  return (
    
    <Router>

      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        
      </Routes>
     

    </Router>
  );
}

export default App;

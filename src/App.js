import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './ui/NavBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './ui/Footer';

function App() {
  return (
    <>
      <Router>
      <div className='max-w-screen-xl mx-auto'>
        <NavBar />
          <Routes>
            <Route path='/' element={<HomePage /> }/>
            <Route path='/about' element={<AboutPage /> }/>
            <Route path='/services' element={<ServicesPage /> }/>
            <Route path='/contact' element={<ContactPage /> }/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
    
  );
}

export default App;

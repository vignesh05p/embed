import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoComponent from './components/VideoComponent';
import CustomerService from './components/CustomerService'; 
import './assets/styles/global.css';
import Info1Component from './components/Info1Component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoComponent />
      <Info1Component />
      <CustomerService />
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import ShopInfo from './components/ShopInfo';
import ImageCarousel from './components/ImageCarousel';
import ReviewCarousel from './components/ReviewCarousel';
import LogoStrip from './components/LogoStrip';
import ServicesOffered from './components/ServicesOffered';
import PaymentMode from './components/PaymentMode';
import TyreQuestion from './components/TyreQuestion';
import TyresSold from './components/TyresSold';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="shop-page-container">
        <ShopInfo />
        <ImageCarousel />
      </div>
      <div className="main-content">
        <ReviewCarousel />
        <LogoStrip />
        <ServicesOffered/>
        <TyresSold/>
        <PaymentMode />
        <TyreQuestion/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

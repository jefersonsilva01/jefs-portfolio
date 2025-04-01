import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

import Hero from './components/Hero'
import Footer from './components/Footer'
import Stripe from './components/Stripe'

function App() {
  return (
    <div className="App">
      <Hero />
      <Stripe />
      <Footer />
    </div>
  );
}

export default App;

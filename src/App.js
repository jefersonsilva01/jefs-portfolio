import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

import Hero from './components/Hero'
import Stripe from './components/Stripe'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Stripe />
      <Works />
      <Footer />
    </div>
  );
}

export default App;

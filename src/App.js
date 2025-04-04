import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

import Hero from './components/Hero'
import Stripe from './components/Stripe'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(null);
  const [lang, setLang] = useState(false);

  const changeTheme = () => setTheme(!theme);
  const changeLang = () => setLang(!lang);

  useEffect(() => setTheme(
    window.matchMedia("(prefers-color-scheme: dark)").matches), []
  );

  return (
    <div className="App">
      <Hero
        theme={theme}
        lang={lang}
        changeTheme={changeTheme}
        changeLang={changeLang} />

      <Stripe
        theme={theme}
        lang={lang} />

      <Works
        theme={theme}
        lang={lang} />

      <Footer
        theme={theme}
        lang={lang} />
    </div>
  );
}

export default App;

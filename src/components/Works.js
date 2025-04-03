import React from "react";
import Slider from 'react-slick';

import { WorksContainer } from './WorksStyle'

const Works = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <WorksContainer>
      <div id="works-content">
        <p className="text">\\ SELECTED WORKS</p>

        <Slider {...settings}>

          <div className="work-section">
            <div className="work">
              <div className="work-show">
                <img src="./assets/Device 1.png" alt="Device" />
                <ul>
                  <li className="bullet">HTML 5</li>
                  <li className="bullet">CSS 3</li>
                  <li className="bullet">JAVASCRIPT</li>
                  <li className="bullet">FIGMA</li>
                </ul>
              </div>
              <h1>#01 VALORANT</h1>
            </div>

            <div className="about">
              <p className="text">ABOUT</p>

              <p className="body-text">
                The project aims to create a game based on the classic top trumps card game, where players use illustrated thematic cards and compare their attributes to find out who would win in each criterion, here in this case the theme used is that of the popular online game Valorant, where the cards are based on their respective characters.
              </p>

              <div className="icons">
                <a href="https://github.com/jefersonsilva01/Valorant-The-Card-Game" target="_blank" rel="noopener noreferrer">
                  <img src="./assets/Github icon.png" alt="Github icon" />
                </a>

                <a href="https://jefersonsilva01.github.io/Valorant-The-Card-Game/" target="_blank" rel="noopener noreferrer">
                  DEMO
                </a>
              </div>
            </div>
          </div>

          <div className="work-section">
            <div className="work">
              <div className="work-show">
                <img src="./assets/Device 2.png" alt="Device" />
                <ul>
                  <li className="bullet">HTML 5</li>
                  <li className="bullet">CSS 3</li>
                  <li className="bullet">HANDLEBARS</li>
                  <li className="bullet">NODE JS</li>
                  <li className="bullet">EXPRESS</li>
                  <li className="bullet">BOOTSTRAP</li>
                  <li className="bullet">FIGMA</li>
                </ul>
              </div>
              <h1>#02 QUADRA</h1>
            </div>

            <div className="about">
              <p className="text">ABOUT</p>

              <p className="body-text">
                This project is a web page inspired by the design of the Tesla website, but dedicated to the iconic Quadra Turbo-R V-Tech car from the game Cyberpunk 2077. The objective is to provide a visual and informative experience for fans of the game, highlighting the features and futuristic aesthetics of the vehicle.
              </p>

              <div className="icons">
                <a href="https://github.com/jefersonsilva01/Quadra" target="_blank" rel="noopener noreferrer">
                  <img src="./assets/Github icon.png" alt="Github icon" />
                </a>

                <a href="https://quadra-steel.vercel.app/" target="_blank" rel="noopener noreferrer">
                  DEMO
                </a>
              </div>
            </div>
          </div>

          <div className="work-section">
            <div className="work">
              <div className="work-show">
                <img src="./assets/Device 3.png" alt="Device" />
                <ul>
                  <li className="bullet">HTML 5</li>
                  <li className="bullet">CSS 3</li>
                  <li className="bullet">REACT</li>
                  <li className="bullet">NODE JS</li>
                  <li className="bullet">EXPRESS</li>
                  <li className="bullet">STYLED COMPONENTS</li>
                  <li className="bullet">FIGMA</li>
                </ul>
              </div>
              <h1>#03 ECHOES</h1>
            </div>

            <div className="about">
              <p className="text">ABOUT</p>

              <p className="body-text">
                Echoes is an article publishing platform inspired by Medium, offering an intuitive and dynamic environment for writers to share their ideas and readers to explore quality content. With a minimalist design and advanced features, Echoes allows you to create, edit and format texts fluidly, in addition to providing interactions through likes. The platform also includes an intelligent recommendation system, connecting users to relevant content based on their interests. Developed with modern technologies, Echoes seeks to democratize writing and promote the dissemination of knowledge.
              </p>

              <div className="icons">
                <a href="https://github.com/jefersonsilva01/Echoes-frontend" target="_blank" rel="noopener noreferrer">
                  <img src="./assets/Github icon.png" alt="Github icon" />
                </a>

                <a href="https://echoes-frontend-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                  DEMO
                </a>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </WorksContainer>
  );
}

export default Works
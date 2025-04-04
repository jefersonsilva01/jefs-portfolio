import React from "react";
import { FooterSection } from "./FooterStyle";

const Footer = props => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Suaviza o movimento de rolagem
    });
  };

  return (
    <FooterSection color={`${props.theme}`}>
      <h1>
        {props.lang
          ? ("VAMOS TRABALHAR JUNTOS")
          : ("LET'S WORK TOGHETER")
        }
      </h1>

      <div id="lists">
        <ul id="contact">
          <li>
            <strong>
              {props.lang
                ? ("CONTATO")
                : ("CONTACT")
              }
            </strong>
          </li>

          <li>
            <strong>
              {props.lang
                ? ("TELEFONE: ")
                : ("PHONE: ")
              }
            </strong>
            <a href="tel:+5511964780592">+55 (11) 96478-0592</a>
          </li>

          <li><strong>E-MAIL: </strong>
            <a href="mailto:jeferson.s.silva1@gmail.com">
              jeferson.s.silva1@gmail.com
            </a>
          </li>
        </ul>

        <div id="social">
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/jefersonsilva01/" rel="noopener noreferrer">
              {props.theme
                ? <img src="./assets/Linkedin icon-light.png" alt="Linkedin icon" />
                : <img src="./assets/Linkedin icon-dark.png" alt="Linkedin icon" />
              }
            </a>

            <a target="_blank" href="https://github.com/jefersonsilva01" rel="noopener noreferrer">
              <img src="./assets/Github icon.png" alt="Github icon" />
            </a>
          </div>

          <div id="BTN-Top" onClick={scrollToTop}>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z" fillRule="nonzero" /></svg>
          </div>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer;
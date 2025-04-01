import React from "react";
import { StripeContainer } from './StripeStyle';

import Slider from 'react-slick';

const Stripe = () => {
  const settings = {
    infinite: true,  // Habilita o loop
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1,
    cssEase: "linear",
    slidesToShow: 15,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <StripeContainer>
      <Slider {...settings}>
        <p className="text">FRONT END</p>
        <p className="text">&#10042;</p>
        <p className="text">BACK END</p>
        <p className="text">&#10042;</p>
        <p className="text">FULL STACK</p>
        <p className="text">&#10042;</p>
        <p className="text">UX/UI DESIGN</p>
        <p className="text">&#10042;</p>
        <p className="text">FRONT END</p>
        <p className="text">&#10042;</p>
        <p className="text">BACK END</p>
        <p className="text">&#10042;</p>
        <p className="text">FULL STACK</p>
        <p className="text">&#10042;</p>
        <p className="text">UX/UI DESIGN</p>
        <p className="text">&#10042;</p>
      </Slider>
    </StripeContainer>
  )
}

export default Stripe
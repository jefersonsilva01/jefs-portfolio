import styled from "styled-components";

const StripeContainer = styled.div`
  background-color: var(--BK-2);
  width: 100%;
  padding: 16px 0; 

  & .slick-slider {
    max-width: 1440px;
    margin: 0 auto;

    & > .slick-arrow {
      display: none !important;
    }

    & > .slick-list > .slick-track {
      width: 100%;
    
      & >.slick-slide {
        width: fit-content !important;

        & > div {
          width: fit-content;
          margin: 0 8px;
        }
      }
    }
    
  }

  & .text {
    color: var(--WT-Main);
    font-family: var(--Hind);
    font-weight: 600;
    display: inline !important;
    width: fit-content;
    margin: 0 8px;
  }
`

export { StripeContainer }
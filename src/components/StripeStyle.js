import styled from "styled-components";

const StripeContainer = styled.div`
  background-color: ${props => props.color === "true" ? "var(--BK-2)" : "var(--WT-2)"};
  width: 100%;
  padding: 16px 0; 

  & .slick-slider {
    max-width: 1440px;
    margin: 0 auto;

    & > .slick-arrow {
      display: none !important;
    }

    & > .slick-list {
      ${'' /* height: fit-content !important; */}
    
      & > .slick-track {
        ${'' /* width: fit-content !important; */}
        ${'' /* height: fit-content !important; */}

        & > .slick-slide {
          width: fit-content !important;

          & > div {
            ${'' /* width: fit-content !important; */}
            margin: 0 8px;
          }
        }
      }
    }
  }

  & .text {
    color: ${props => props.color === "true" ? "var(--WT-Main)" : "var(--BK-Main)"};
    font-family: var(--Hind);
    font-weight: 600;
    display: inline !important;
    width: fit-content;
    margin: 0 8px;
  }
`

export { StripeContainer }
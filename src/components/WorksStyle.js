import styled from "styled-components";

const WorksContainer = styled.div`
  background-color: var(--BK-Main);
  width: 100%;
  height: 100%;

  & > #works-content {
    ${'' /* max-width: 1440px; */}
    margin: 0 auto;
    padding: 0 32px;

    & .text {
      padding-top: 64px;
      color: var(--WT-Main);
      font-family: var(--Hind);
      font-weight: 600;
      font-size: 1.1em;
    }

    & .work-section {
      display: flex !important;

      @media(max-width: 1200px) {
        flex-direction: column;
        align-items: center;
      }
    }

    & .work {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media(max-width: 1200px) {
        flex-direction: column-reverse;
      }
    }

    & .work-show {
      display: flex;
      align-items: center;
      flex-direction: column;

      & > img {
        width: 100%;
      }

      & > ul {
        display: flex;
        flex-wrap: wrap;
        ${'' /* justify-content: center; */}
        max-width: 500px;
        text-align: center;
      }
    }
    
    & .bullet {
      list-style: none;
      color: var(--WT-Main);
      font-family: var(--Hind);
      font-weight: 600;
      font-size: 14px;
      background-color: var(--BK-3);
      opacity: 0.5;
      display: inline;
      margin: 8px;
      border-radius: 50px;
      padding: 4px 16px;
    }

    & h1 {
      color: var(--WT-Main);
      font-size: 4em;
      padding: 68px 0 64px;
      display: inline;

      @media(max-width: 1200px) {
        padding: 68px 0 32px;
        font-size: 10vw;
      }
    }

    & .body-text {
      color: var(--WT-Main);
      font-size: 1.2em;
      max-width: 585px;
      padding: 16px 0;
    }

    & .icons {
      display: flex;
      align-items: center;
      padding: 16px 0 64px;

      & a {
        margin: 0 8px;
        height: 36px;
        display: inline;
        font-weight: 600;
      }

      & a:nth-child(2){
        text-decoration: none;
        color: var(--BK-Main);
        background-color: var(--WT-2);
        border-radius: 8px;
        padding: 4px 16px;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--WT-Main);
          background-color: var(--BK-3);
        }
      }
    }
  }

  & .slick-slider {
    ${'' /* margin: 0;
    width: 100%;
    background-color: var(--BK-Main); */}

    & > .slick-arrow {
      display: none !important;
    }
  }
`

export { WorksContainer }
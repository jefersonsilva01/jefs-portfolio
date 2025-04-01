import styled from "styled-components";

const Header = styled.header`
  background-color: var(--BK-Main);
  height: 100vh;
  overflow: hidden;

  & > nav {
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0 auto;
    padding: 8px 32px;

    & > h2 {
      color: var(--WT-Main);
    }

    & > #icons {
      max-width: 88px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      
      & > div {
        cursor: pointer;
        background-color: var(--BK-2);
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--BK-3);
        }
      
        & > svg > path {
          fill: var(--WT-Main);
        }
      }
    }

    @media(max-width: 800px) {
      margin: 0 32px;
    }

    @media(max-width: 440px) {
      margin: 0 24px;
    }
  }

  & > main {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0px 32px;
    max-height: 100%;

    & > #title {
      padding-top: 10vh;
      display: flex;
      align-items: baseline;

      & > h1 {
        color: var(--WT-Main);
        font-size: 236px;
        line-height: 1;
      }

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--WT-Main);
        width: 44px;
        height: 44px;
        border-radius: 50%;
      }
    }

    & > h2 {
      color: var(--WT-Main);
      font-size: 44px;
      line-height: 1;
      border-bottom: solid 8px var(--WT-Main);
      display: inline-block;
    }

    & > p {
      margin-top: 48px;
      color: var(--WT-Main);
      font-size: 90%;
      font-weight: 400;
      max-width: 560px;
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    & > span {
      display: block;
      margin: 178px 0 16px;
      color: var(--WT-Main);
      font-weight: 600;
      animation: blink 3.5s infinite;
      text-align: center;
    }

    & > img {
      display: block;
      margin: 0 auto;
    }

    @media(min-width: 601px) and (max-width: 800px) {
      & > #title {
        padding-top: 120px;
      }

      & > #title > h1 {
        font-size: 30vw;
      }

      & > h2 {
        font-size: ;
      }

      & > p {
        font-size: 1.2em;
      }

      & > span {
        margin-top: 10vw;
      }
    }

    @media(max-width: 600px) {
      & > #title {
        padding-top: 10vh;

        & > div {
          width: 24px;
          height: 24px;
        }
      }

      & > #title > h1 {
        font-size: 35vw;
      }

      & > h2 {
        font-size: 6.3vw;
      }

      & > p {
        display: none;
      }

      & > span {
        margin-top: 18vh;
      }
    }
  }
`;

export { Header };

import styled from "styled-components";

const Header = styled.header`
  background-color: var(--BK-Main);

  & > nav {
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;

export { Header };

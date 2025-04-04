import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: ${props => props.color === "true" ? "var(--BK-2)" : "var(--WT-2)"};
  width: 100%;
  height: 100%;
  padding: 0 108px 32px;

  & > h1 {
    color: ${props => props.color === "true" ? "var(--WT-Main)" : "var(--BK-Main)"};
    font-size: ${props => props.lang === "true" ? "92px" : "4.5em"};
    text-align: center;
    max-width: 1440px;
    margin: 0 auto;
  }

  & > #lists {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1044px;
    margin: 0 auto;
    padding: 0 32px;

    & > #contact {
      list-style: none;

      & > :first-child > strong {
        font-size: 24px;
      }
    
      & > li {
        & > strong, a {
          color: ${props => props.color === "true" ? "var(--WT-Main)" : "var(--BK-Main)"};
          text-decoration: none;
        }

        & > a {
          font-weight: 500;
        }
      }
    }

    & > #social {
      display: flex;
      width: 200px;
      justify-content: space-between;

      & > div > a > img {
        margin: 0 8px;
        height: 44px;
        width: 44px;
      }

      & #BTN-Top {
        border: solid 2px ${props => props.color === "true" ? "var(--WT-Main)" : "var(--BK-Main)"};
        background-color: transparent;
        border-radius: 8px;
        height: 44px;
        width: 32px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        & > svg {
          padding-top: 4px;
          width: 28px;
          height: 28px;

          & > path {
            fill: ${props => props.color === "true" ? "var(--WT-Main)" : "var(--BK-Main)"};
          }
        }

        &:hover {
          border: solid 2px ${props => props.color === "true" ? "var(--BK-3)" : "var(--WT-2)"};
          background-color: ${props => props.color === "true" ? "var(--WT-Main)" : "var(--BK-Main)"};

          & > svg > path {
            fill: ${props => props.color === "true" ? "var(--BK-3)" : "var(--WT-2)"};
          }
        }
      }
    }
  }

  @media(min-width: 800px) and (max-width: 1200px) {
    padding: 0 24px;

    & > h1 {
      font-size: 8vw;
      padding: 8px 0;
    }

    & > #lists {
      flex-direction: column;
      align-items: start;
    
      & > #contact { 
        margin: 24px 0;
      }

      & > #social { 
        width: 100%;
        margin: 24px 0;
      }
    }
  }

  @media(max-width: 799px) {
    padding: 0 24px;

    & > h1 {
      font-size: 7vw;
      padding: 16px 0;
    }

    & > #lists {
      flex-direction: column;
      align-items: start;
    
      & > #contact { 
        margin: 24px 0;
      }

      & > #social { 
        width: 100%;
        margin: 24px 0;
      }
    }
  }
`;

export { FooterSection }
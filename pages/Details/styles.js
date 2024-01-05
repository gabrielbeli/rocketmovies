import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > a {
    align-self: start;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 12px;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 24px;

    > span {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-size: 20px;
      margin-left: 20px;
    }
  }

  > h2 {
    font-size: 14px;
    font-weight: 500;
    padding-top: 24px;
    margin-bottom: 0;

    > img {
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }

    > span {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-size: 14px;
      margin-left: 20px;
      margin-right: 6px;
    }
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  > section {
    margin-top: 0;
  }

`;


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
    overflow-y: auto;
  }
  
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 1080px;
  margin: 38px auto;

  > a {
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.ORANGE };
    }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-top: 20px;
    margin-bottom: 36px;
  }
  
  .Id {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .Bt {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;
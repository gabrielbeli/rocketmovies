import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh; 
`;

export const Main = styled.div`
 max-width: 1120px;
 display: flex;
 justify-content: space-between;
 margin: 0 auto;
 align-items: baseline;
 
`;

export const Content = styled.div` 
  max-width: 1120px;
  
  margin: 0 auto;

  overflow-y: auto;

`;

export const NewNote = styled(Link)`
    
  background-color: ${({ theme }) => theme.COLORS.ORANGE };
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 48px;
  border-radius: 8px;
  margin-top: 12px;
;

  svg {
    margin-right: 8px;
  }
`;


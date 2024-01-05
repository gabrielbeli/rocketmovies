import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;
  
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-right: 16px;
    margin-left: 64px;
   
  
    #exit {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-align: right;
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;


export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:-10px;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Search = styled.div`
  width: 630px;
  margin-left: 64px;
`;
import styled from "styled-components";
import { colors } from "../../styles/variables";

export const ContantContainer = styled.div`
  max-width: 700px;
  border-left: 3px dashed ${colors.blu};
  padding: 2rem 0 2rem 2rem;
  
  display: flex;
  flex-direction: column;
  justify-items: left;
  gap: 2rem;
`

export const TimeLineWrapperCard = styled.div`
  background-color: ${colors.gray2};
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: fit-content;

  & .locate {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;

    & p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: ${colors.gray4}
    }
  }
  & .date {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${colors.blu_light};
  }
  & .title {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
  }

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    
    border-radius: 50%;
    background-color: ${colors.blu};
    
    position: absolute;
    top: 1.58rem;
    left: -41px;
  }
  &::after {
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: transparent  ${colors.gray2} transparent transparent;
    
    position: absolute;
    top: 1.5rem;
    left: -19px;
    z-index: 11;    
  }

  @media (max-width: 700px) {
    padding: 0.8rem 0.8rem 0.8rem 1.2rem;

    & svg {
      width: 16px;
      /* align-self: self-start; */
    }
    & .locate {
      align-items: start;

      & p {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: ${colors.gray4}
      }
    }
  }
`
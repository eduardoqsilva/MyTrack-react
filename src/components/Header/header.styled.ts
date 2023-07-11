import styled from "styled-components";
import { colors, font } from "../../styles/variables";

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  
  background-color: ${colors.gray2};
  border-radius: 4px;

  & span {
    font-size: 0.9rem;
    color: ${colors.gray4};
  }

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & h1 {
      font-size: 1.5rem;
    }

    & button {
      background-color: transparent;
      border: none;
      transition: all .1s ease-in;

      &:not(:disabled):active {
        transform: scale(0.95);
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`
interface OverlayType {
  $show: boolean
}
export const OverlayWrapper = styled.div<OverlayType>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: ${(props) => props.$show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 20;

  background: rgba(0,0,0,0.9);
`

export const FormOverlay = styled.form`
  width: 100%;
  max-width: 500px;
  /* min-height: 400px; */
  background-color: ${colors.gray3};
  border-radius: 8px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & button {
    height: 50px;
    border-radius: 8px;
    border: none;

    font-family: ${font.default};
    font-weight: 500;
    font-size: 1rem;

    background-color: transparent;
    color: ${colors.blu};
    border: 3px solid ${colors.blu};
    transition: all 0.1s ease-in;
    margin-top: 1rem;

    &:hover {
      color: ${colors.blu_light};
      border: 3px solid ${colors.blu_light};
    }

    &:active{
      transform: scale(0.97);
    }
  }

  & input[type='text'] {
    width: 100%;
    height: 50px;
    background-color: ${colors.gray2};
    border: none;
    border-radius: 8px;

    padding: 0 1rem;

    font-family: ${font.default};
    font-weight: 500;
    font-size: 1rem;
    color: ${colors.white};

    outline: none;
    border: 2px solid transparent;
    caret-color: ${colors.white};

    &:focus {
      border: 2px solid ${colors.blu};
    }

    &::placeholder {
      font-weight: 500;
      color: ${colors.gray4};
    }
  }
`

export const WrapperRatio = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
`

export const InputRatio = styled.input.attrs({type: 'radio'})`
  appearance: none;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 3px solid transparent;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
      switch (props.value) {
        case 'tecnologia':
          return colors.blu
        case 'roupas':
          return colors.pink
        case 'comida':
          return colors.yellow
        case 'geral':
          return colors.green
        default:
          return colors.blu
      }
  }};

  &::after {
    content: attr(value); 
    font-family: ${font.default};
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.white};
    text-transform: capitalize;
  }
  &:checked {
    border: 3px solid ${colors.white};
  }
`
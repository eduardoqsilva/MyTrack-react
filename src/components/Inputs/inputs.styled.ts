import styled from "styled-components";
import { colors } from "../../styles/variables";

export const FormStyled = styled.form`
  width: 100%;
  max-width: 500px;
`

export const WrapperInput = styled.div`
  width: 100%;
  height: 56px;
  max-width: 500px;

  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 7px;
  border-radius: 8px;

  background-color: ${colors.gray2};

  & input {
    /* width: 100%; */
    flex-grow: 1;
    height: 100%;

    font-weight: 500;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${colors.white};

    caret-color: ${colors.white};

    &::placeholder {
      color: ${colors.gray4};
      font-weight: 500;
    }
  }

  & button {
    width: 42px;
    height: 42px;

    border: none;
    border-radius: 8px;
    background-color: ${colors.blu};
    transition: all 0.1s ease-in;

    &:active {
      transform: scale(0.95);
    }
  }
`
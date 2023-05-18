import styled from "styled-components";
import { colors } from "../../styles/variables";

export const ButtonShareStyled = styled.button`
  padding: 0.7rem;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${colors.gray3};
  border: 1px solid ${colors.blu};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;

  transition: all 0.1s ease-in;

  &:active {
    transform: scale(0.95);
  }
`
import styled from "styled-components";
import { colors } from "../../styles/variables";


interface TypeCard {
  tag: 'tecnologia' | 'comida' | 'roupas' | 'geral'
}

export const CardWrapper = styled.div<TypeCard>`
  width: 100%;
  max-width: 500px;
  
  background-color: ${colors.gray2};
  padding: 0.6875rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  & p {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.gray7};
  }

  & button {
    border: none;
    background: transparent;
    
    display: flex;
    align-items: center;

    & svg {
      color: ${colors.gray4};
      transition: all 0.1s ease-in;
    }

    &:hover {
      & svg {
        color: ${colors.red}
      }
    }
    &:active {
      & svg {
        transform: scale(0.90);
      }
    }
  }

  &::before {
    content: '';
    display: block;
    width: 30%;
    height: 2px;
    background-color: ${(props) => {
      switch (props.tag) {
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
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const IconWrapper = styled.div<TypeCard>`
  background-color: ${(props) => {
    switch (props.tag) {
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
  width: 46px;
  height: 46px;
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`
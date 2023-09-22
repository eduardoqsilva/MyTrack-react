import styled, { css } from "styled-components";

interface LogoWrapperProps {
  route: boolean
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  .backToHome {
    display: ${props => props.route ? 'block' : 'none'};
  }

  @media (max-width: 700px) {
    ${props => props.route ? css`justify-content: space-between;` : css`justify-content: center;` }
  }
`
import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1rem;

  @media (max-width: 700px) {
    left: 50%;
    transform: translateX(-50%);
  }
`
import styled from "styled-components";

export const TrackContantWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;

  & .input {
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`
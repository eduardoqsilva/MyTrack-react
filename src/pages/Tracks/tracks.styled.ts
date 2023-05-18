import styled from "styled-components";

export const TrackContantWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 1.5rem 1.5rem 1.5rem;


  & .input {
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    margin-top: 6rem;
  }
`
import styled from 'styled-components'

export const Precautions = styled.div`
  position: absolute;
  width: 50vw;
  height: 100vh;
  background-color: #06e26b;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: #000;
    font-size: 28px;
  }

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    justify-content: center;
    text-align: center;
    position: relative;
    width: 100%;
    min-height: 100%;

    h2 {
      font-size: 20px;
    }

    span {
      font-size: 14px;
    }
  }
`

export const WashHandsTopic = styled.div`
  height: 200px;
  width: 90%;

  display: flex;
  align-items: center;

  div {
    width: 60%;
    font-size: 20px;
    font-weight: 600;
  }
`

export const DistanceTopic = styled.div`
  height: 200px;
  width: 90%;

  display: flex;
  align-items: center;

  div {
    width: 60%;
    font-size: 20px;
    font-weight: 600;
  }
`

export const StayHomeTopic = styled.div`
  height: 200px;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    width: 60%;
    font-size: 20px;
    font-weight: 600;
  }
`

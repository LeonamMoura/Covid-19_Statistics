import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100vw;
  width: 100%;
  height: 100vh;

  background-color: #000;
  margin-top: 40px;

  @media screen and (max-width: 970px) {
    justify-content: space-around;
    margin-top: 40px;
  }
`
export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100vw;
  height: 80px;
  background: #06e26b;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.28);

  button {
    margin-right: 20px;
    cursor: pointer;

    width: 10%;
    height: 40%;

    background-color: transparent;
    color: red;
    border: solid 2px red;
    font-weight: 600;

    :hover {
      transition: 0.3s;
      background-color: red;
      color: white;
    }
  }
`
export const Slogan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 20px;

  h1 {
    color: #000;
  }

  h1 span {
    font-size: 30px;
    color: #fff;
  }

  @media screen and (max-width: 970px) {
    h1,
    h1 span {
      font-size: 20px;
    }
  }
`

export const MainSection = styled.main`
  width: 90%;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  color: #fff;

  h2 span {
    color: #06e26b;
  }
`

export const Datas = styled.div`
  width: 70%;
  height: 60%;

  border: solid 2px #06e26b;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-height: 60vh;
    width: 100%;
  }
`
export const InformationOfDatas = styled.div`
  @media screen and (max-width: 970px) {
    font-size: 18px;
    width: 100%;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`

export const ConfirmedCases = styled.div`
  grid-column: 4/6;
  grid-row: 2/3;
  text-align: center;
`

export const RecoveredCases = styled.div`
  grid-column: 4/6;
  grid-row: 4/6;

  text-align: center;

  h1 {
    color: blue;
  }
`

export const SeriousCases = styled.div`
  grid-column: 1/3;
  grid-row: 4/6;
  text-align: center;

  h1 {
    color: yellow;
  }
`

export const Deaths = styled.div`
  grid-column: 7/9;
  grid-row: 4/6;
  text-align: center;

  h1 {
    color: red;
  }
`

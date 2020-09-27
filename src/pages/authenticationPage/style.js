import styled from 'styled-components'

export const DatasField = styled.div`
  width: 50vw;
  height: 100vh;

  background-color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    width: 100%;
  }
`
export const Slogan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 span {
    font-size: 30px;
    color: #fff;
  }
`
export const ButtonAlterForm = styled.button`
  cursor: pointer;
  border: solid 2px #06e26b;
  border-radius: 10px;
  width: 60%;
  height: 60px;

  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  background-color: transparent;
  color: #ffffff;

  :hover {
    background-color: #06e26b;
  }
`
export const AlterFormField = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

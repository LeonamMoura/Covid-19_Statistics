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
    min-height: 100vh;
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

  @media screen and (max-width: 380px) {
    h1,
    h1 span {
      font-size: 20px;
    }
  }
`

export const AlterFormField = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: dragTop 1.8s;

  button {
    font-size: 1.2em;
  }

  u {
    cursor: pointer;
    color: #06e26b;
    font-size: 20px;

    :active {
      transition: 0.3s;
      transform: scale(2);
    }
  }

  u {
    color: #06e26b;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    width: 100%;
    font-size: 12px;

    button {
      width: 100px;
      height: 50%;
      font-size: 12px;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 1000px) {
    button {
      width: 100px;
      height: 50%;
      font-size: 12px;
    }
  }

  @keyframes dragTop {
    from {
      margin-top: 200px;
    }
    to {
      margin-top: 0px;
    }
  }
`

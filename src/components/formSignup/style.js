import styled from 'styled-components'

export const Form = styled.form`
  height: 90%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  animation: dragLeft 0.8s;

  @keyframes dragLeft {
    from {
      margin-left: 1000px;
    }
    to {
      margin-left: 0;
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    width: 60%;
    height: 60px;

    font-weight: bold;
    font-size: 1.2rem;

    background-color: #06e26b;
    color: #fff;

    :active {
      background-color: #0bb056;
    }

    @media screen and (min-width: 280px) and (max-width: 500px) and (max-height: 640) {
      height: 50px;
    }

    @media screen and (min-width: 501px) and (max-width: 1000px) {
      height: 50px;
    }
  }

  input {
    width: 100%;
    height: 50px;

    @media screen and (min-width: 280px) and (max-width: 500px) {
      height: 50px;
      width: 100%;
      margin-bottom: 10px;
    }

    @media screen and (min-width: 501px) and (max-width: 1000px) {
      height: 8vh;
      width: 100%;
      margin-bottom: 10px;
    }
  }

  select {
    width: 100%;
    height: 50px;
    background-color: transparent;

    color: #06e26b;
    font-size: 1.2rem;

    border: solid 2px #06e26b;
    border-radius: 10px;

    option {
      background-color: #06e26b;
      color: #000;
    }
  }
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`

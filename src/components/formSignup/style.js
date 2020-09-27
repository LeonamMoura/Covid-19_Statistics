import styled from 'styled-components'

export const Form = styled.form`
  height: 70%;
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

    :hover {
      background-color: #0bb056;
    }
  }

  input {
    width: 100%;
    min-width: 300px;
    height: 50px;
  }

  select {
    width: 100%;
    min-width: 300px;
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
`

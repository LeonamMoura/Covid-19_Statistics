import styled from 'styled-components'

export const Form = styled.form`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  animation: dragRight 0.8s;

  @keyframes dragRight {
    from {
      margin-right: 1000px;
    }
    to {
      margin-right: 0;
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
    height: 60px;
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

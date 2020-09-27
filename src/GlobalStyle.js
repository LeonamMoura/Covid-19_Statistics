import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0px;
    padding: 0px;

    outline: none;
  }
  
  body {
    background-color: #000;

    font-family: 'Rambla', sans-serif;
  }

  

  input {
    font-size: 1.2em;

    background: #FFFFFF;
    border: 3px solid #06E26B;
    box-sizing: border-box;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #06E26B;
  }


  h1 {
    font-style: italic;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #06E26B;
  }

  h2 {
    color: white;
  }
`

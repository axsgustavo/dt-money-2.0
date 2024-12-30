import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body {
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  button, a {
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      opacity 0.2s ease;
  }
`;

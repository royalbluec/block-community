import { Global, css } from '@emotion/react';

const style = css`
  :root {
    --gray: #f1f2f3;
    --white: #ffffff;
    --blue: #316bd0;
    --light-blue: #d5e1f6;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1rem;
    background-color: var(--gray);
  }

  a {
    color: inherit;
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }

  h1,
  h2,
  h3,
  h4,
  ul,
  li,
  p {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ul,
  li {
    list-style: none;
  }

  em,
  i,
  u {
    font-style: normal;
  }

  input,
  button {
    border: 0;
    outline: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

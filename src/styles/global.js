import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #F3F3F3;
    -webkit-font-smoothing: antialiased;
  }

  a, h1{
    text-decoration: none;
    color: #333;
  }

  input,
  button,
  textarea {
    font: 400 18px Roboto, sans-serif;
    background: #FFF;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  .button {
    width: 100%;
    height: 40px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    line-height: 40px;
    transition: filter 0.2s;
  }

  .button:hover {
    filter: brightness(90%);
  }

  .back-link svg {
    margin-right: 8px;
  }

  .back-link:hover {
    opacity: 0.8;
  }
`;

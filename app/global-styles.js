import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .cursor {
    cursor: pointer;
  }

  .header {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
  }

  .sub-header {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0;
    margin-bottom: 8px;
    line-height: 32px;
    color: #fff;
    max-width: 980px;
    margin: auto auto 28px;
    text-align: center;
  }

  .card-title {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0;
    color: #383e45;
    margin-bottom: 9px;
  }

  .card-des {
    letter-spacing: .5px;
    font-size: 12px;
    line-height: 18px;
    color: #626870;
    max-width: 400px;
  }

  .image-text {
    color: #fff;
    text-align: center;
}

`;

export default GlobalStyle;

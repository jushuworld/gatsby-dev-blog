import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import { brandPrimary, black } from './colors';

export default createGlobalStyle`
  ${normalize}

  html {
    line-height: 1.8;
  }
  
  body {
    font-family: 'Noto Serif', serif;
    color: ${black};
  }

  h1, h2, h3, h4 {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  }

  p {
    font-size: 1.1rem;
  }

  a {
    color: ${brandPrimary};
  }

  ul {
    padding: 0;
  }

  @media screen and (min-width: 700px) {
    html {
      line-height: 1.6;
    }

    p {
      font-size: 1rem;
    }
  }
`;

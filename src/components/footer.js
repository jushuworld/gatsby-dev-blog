import React from 'react';
import styled from 'styled-components';

import { black } from '../utils';

const Footer = () => (
  <FooterStyles>
    <small>@wilhelmsentence</small>
  </FooterStyles>
);

export default Footer;

const FooterStyles = styled.footer`
  margin: 1rem;
  text-align: center;
  small {
    color: ${black};
  }
`;

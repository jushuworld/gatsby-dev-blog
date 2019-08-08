import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <IndexPageStyles>
      <p>
        I’m Wilhelm. I run Devsmith, a sales and customer service immersive
        based in Bolivia. I am originally from Germany and now live in Beijing.
      </p>
      <p>
        Before Devsmith I started [redacted] - a realtime audio platform for
        developers and worked as a software engineer at Lem - a dogecoin
        startup. I did my academic work at USC and Freie Universitaet zu Berlin.
      </p>
      <p>
        I give talks on coding and entrepreneurship - here’s a list of them. I
        love music and put together a new playlist every couple of months
      </p>
      <Img fluid={data.dogImage.childImageSharp.fluid} />
    </IndexPageStyles>
  </Layout>
);

IndexPage.propTypes = {
  data: propTypes.shape({
    dogImage: propTypes.object,
  }),
};

IndexPage.defaultProps = {
  data: ``,
};

export default IndexPage;

export const indexPageQuery = graphql`
  query {
    dogImage: file(relativePath: { eq: "dog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPageStyles = styled.article`
  p {
    margin-bottom: 2rem;
  }
`;

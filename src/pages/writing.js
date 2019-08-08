import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { format } from 'date-fns';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { brandPrimary } from '../utils';

const renderBlogPostPreview = allBlogPosts => {
  return allBlogPosts.map(blogPost => {
    const { title, content, slug, id, publishDate } = blogPost.node;
    const contentElements = content.json.content;

    const firstParagraph = contentElements.find(
      element => element.nodeType === 'paragraph'
    );
    return (
      <React.Fragment key={id}>
        <Link to={slug} className="link">
          <h2 className="blog-title">{title}</h2>
        </Link>
        <span className="publish-date">
          {format(publishDate, 'MMMM Do, YYYY')}
        </span>
        {documentToReactComponents(firstParagraph)}
        <Link to={slug} className="link">
          <span className="read-more">Read more</span>
        </Link>
      </React.Fragment>
    );
  });
};

const WritingPage = ({ data }) => {
  const allBlogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <WritingPageStyles>
        <h1>Writing</h1>
        {renderBlogPostPreview(allBlogPosts)}
        <SEO title="Writing" />
      </WritingPageStyles>
    </Layout>
  );
};

export default WritingPage;

WritingPage.propTypes = {
  data: propTypes.shape({
    allContentfulBlogPost: propTypes.shape({
      edges: propTypes.array,
    }),
  }),
};

WritingPage.defaultProps = {
  data: ``,
};

export const writingPageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: [publishDate, title], order: DESC }) {
      edges {
        node {
          content {
            json
          }
          id
          publishDate
          slug
          title
        }
      }
    }
  }
`;

const WritingPageStyles = styled.div`
  .blog-title {
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: opacity 200ms ease-in-out;
    }
  }

  .link {
    color: inherit;
    opacity: 1;
    text-decoration: none;
  }

  .publish-date {
    display: block;
    font-size: 0.9rem;
    opacity: 0.7;
  }

  .read-more {
    color: ${brandPrimary};
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

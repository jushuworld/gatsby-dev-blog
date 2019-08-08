import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { format } from 'date-fns';

import Layout from '../components/layout';
import { syntaxText, syntaxBackground } from '../utils';

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const {
        description,
        file: {
          'en-US': { url },
        },
      } = node.data.target.fields;
      return (
        <figure className="blog-image">
          <img src={`${url}?fl=progressive&q=80`} alt={description['en-US']} />
          <figcaption>{description['en-US']}</figcaption>
        </figure>
      );
    },
  },
};

const BlogPost = ({ data }) => {
  const { title, author, publishDate, content } = data.contentfulBlogPost;
  const allContent = content.json;

  return (
    <Layout>
      <BlogPostStyles>
        <h1>{title}</h1>
        <span className="byline">
          Published on {format(publishDate, 'MMMM Do, YYYY')} by {author}
        </span>
        {documentToReactComponents(allContent, richTextOptions)}
        <hr />
      </BlogPostStyles>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: propTypes.shape({
    contentfulBlogPost: propTypes.shape({
      author: propTypes.string,
      content: propTypes.object,
      publishDate: propTypes.string,
      title: propTypes.string,
    }),
  }),
};

BlogPost.defaultProps = {
  data: ``,
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author
      content {
        json
      }
      publishDate
      slug
      title
    }
  }
`;

const BlogPostStyles = styled.div`
  figcaption {
    font-style: italic;
  }

  img {
    width: 100%;
    height: auto;
  }

  code {
    background: ${syntaxBackground};
    border-radius: 5px;
    color: ${syntaxText};
    font-family: 'Source Sans Pro', 'Courier', sans-serif;
    padding: 0.25rem;
  }

  .byline {
    font-style: italic;
  }
`;

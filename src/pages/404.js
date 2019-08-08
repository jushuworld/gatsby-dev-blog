import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not found</h1>
    <p>Looks like you found something that doesn&#39;t exist.</p>
  </Layout>
);

export default NotFoundPage;

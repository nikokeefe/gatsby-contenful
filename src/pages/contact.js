import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        You know who to call{' '}
        <a
          href="http://nikwillok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          nikwillok.com
        </a>
      </p>
    </Layout>
  );
};

export default Contact;

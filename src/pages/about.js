import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>first gatsby powered site</p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  );
};

export default About;

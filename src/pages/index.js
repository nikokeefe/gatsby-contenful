import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Nik. I am a React developer residing in Christchurch.</h2>
    </Layout>
  );
};

export default Index;

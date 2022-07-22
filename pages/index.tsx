/* eslint-disable jsx-a11y/role-has-required-aria-props */
import type { NextPage } from 'next';
import Head from 'next/head';
import BatchDrops from '../components/home/BatchDrops';
import DropAgainstCollections from '../components/home/DropAgainstCollections';
import HomeHero from '../components/home/HomeHero';

import Layout from '../components/layouts';
// import OverviewTable from '../components/home/OverviewTable';

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Multi Send</title>
      <meta name="description" content="Market overview" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeHero />
    <BatchDrops />
    <DropAgainstCollections />
  </Layout>
);

export default Home;
